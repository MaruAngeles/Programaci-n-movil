from flask import Flask, render_template, request, session, redirect, url_for
import secrets

app = Flask(__name__)
app.secret_key = secrets.token_hex(16)

# reglas, notas y fechas  de los documentos

GAME_CONTENT = {
    'rules': {
        'title': 'Reglamento del Curso',
        'info': [
            'Asistencia mínima: 80% para tener derecho a examen.',
            'Tolerancia de entrada: 10 minutos.',
            'Justificantes: Deben entregarse en un plazo máximo de 24 horas hábiles.',
            'Dispositivos: Uso de celular restringido a actividades académicas.',
            'Alimentos: No se permite el consumo de alimentos en el aula/laboratorio.'
        ],
        'questions': [
            {
                'id': 'q1',
                'text': '¿Cuál es el porcentaje mínimo de asistencia requerido?',
                'options': ['70%', '80%', '90%', '100%'],
                'correct': '80%'
            },
            {
                'id': 'q2',
                'text': '¿Cuántos minutos de tolerancia se permiten para entrar a clase?',
                'options': ['5 min', '10 min', '15 min', 'No hay tolerancia'],
                'correct': '10 min'
            }
        ]
    },
    'grades': {
        'title': 'Criterios de Evaluación',
        'info': [
            'Parcial 1 y 2: Conocimiento (40%), Desempeño (20%), Producto (30%), Proyecto (10%).',
            'Parcial 3: Conocimiento (10%), Desempeño (10%), Producto (30%), Proyecto (50%).',
            'Nota: El proyecto final tiene un peso mayor en el último parcial.'
        ],
        'questions': [
            {
                'id': 'q3',
                'text': 'En el Parcial 1, ¿qué porcentaje tiene el Conocimiento?',
                'options': ['20%', '30%', '40%', '50%'],
                'correct': '40%'
            },
            {
                'id': 'q4',
                'text': 'En el Parcial 3, ¿cuál es el porcentaje asignado al Proyecto?',
                'options': ['10%', '30%', '50%', '100%'],
                'correct': '50%'
            }
        ]
    },
    'skills': {
        'title': 'Contenido del Curso',
        'info': [
            'Unidad I: Introducción a las plataformas móviles.',
            'Unidad II: Manejo de interfaces de usuario.',
            'Unidad III: Almacenamiento de datos y servicios.',
            'Unidad IV: Publicación y optimización.'
        ],
        'questions': [
            {
                'id': 'q5',
                'text': '¿Qué unidad se enfoca en el manejo de interfaces de usuario?',
                'options': ['Unidad I', 'Unidad II', 'Unidad III', 'Unidad IV'],
                'correct': 'Unidad II'
            },
            {
                'id': 'q6',
                'text': '¿En qué unidad se ve la publicación de la aplicación?',
                'options': ['Unidad I', 'Unidad II', 'Unidad III', 'Unidad IV'],
                'correct': 'Unidad IV'
            }
        ]
    },
    'timeline': {
        'title': 'Calendario y Fechas Importantes',
        'info': [
            'Parcial 1: 1 de Junio de 2026.',
            'Parcial 2: 6 de Julio de 2026.',
            'Parcial 3: 10 de Agosto de 2026.',
            'Examen Final: 17 de Agosto de 2026.'
        ],
        'questions': [
            {
                'id': 'q7',
                'text': '¿Cuándo es la evaluación del parcial 1?',
                'options': ['1 de Mayo', '1 de Junio', '1 de Julio', '1 de Agosto'],
                'correct': '1 de Junio'
            },
            {
                'id': 'q8',
                'text': '¿Qué fecha está marcada para el Examen del parcial 3?',
                'options': ['10 de Agosto', '15 de Agosto', '17 de Agosto', '20 de Agosto'],
                'correct': '10 de Agosto'
            }
        ]
    }
}

#RUTAS DE LA APLICACIÓN 

@app.route('/')
def index():
    # Inicializamos el progreso si no existe
    if 'progress' not in session:
        session['progress'] = 0 
        session['commitment'] = False
    return render_template('index.html', progress=session['progress'], content=GAME_CONTENT)

@app.route('/next_section', methods=['POST'])
def next_section():
    # Verificamos las respuestas enviadas
    current_progress = session.get('progress', 0)
    
    
    progress_map = {1: 'rules', 2: 'grades', 3: 'skills', 4: 'timeline'}
    
    if current_progress in progress_map:
        section_key = progress_map[current_progress]
        questions = GAME_CONTENT[section_key]['questions']
        
        correct_count = 0
        for q in questions:
            user_answer = request.form.get(q['id'])
            if user_answer == q['correct']:
                correct_count += 1
        
        #  2 respuestas correctas para avanzar
        if correct_count >= 2:
            session['progress'] += 1
            session['commitment'] = False 
        else:
            return render_template('index.html', 
                                 progress=current_progress, 
                                 content=GAME_CONTENT, 
                                 error="Debes responder correctamente ambas preguntas para avanzar.")
    
    return redirect(url_for('index'))

@app.route('/start', methods=['POST'])
def start_game():
    session['progress'] = 1
    return redirect(url_for('index'))

@app.route('/commit', methods=['POST'])
def commit():
    if request.form.get('commit_check') == 'on':
        session['commitment'] = True
    return redirect(url_for('index'))

@app.route('/restart')
def restart():
    session.clear()
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True, port=5001)
