import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    es: {
        translation: {
            footer: {
                'powered-by': 'Hecho con mucho cariño en Madrid :)'
            },
            header: {
                login: 'login',
                title: 'Cita Médica en Casa'
            },
            home: {
                'doctor': {
                    title: 'Médico',
                    'first-paragraph': 'Si quieres prestar tu ayuda aquí te explicamos cómo.',
                    cta: 'Acceder como profesional'
                },
                'pacient': {
                    title: 'Paciente',
                    'first-paragraph': 'Accede para solicitar una cita online.',
                    cta: 'Solicitar cita'
                },
                'what-is': {
                    title: '¿Qué es Cita Médica en Casa?',
                    'first-paragraph': 'Una plataforma creada con la finalidad de aliviar la saturación del sistema público de salud. Ponemos en contacto a profesionales de la medicina con pacientes, para resolver dudas sobre sus dolencias y evitar así desplazamientos innecesarios a centros de salud y hospitales.',
                    'second-paragraph': '<strong>Si tienes una emergencia llama al 112</strong>, no esperes a que te atendamos en esta web.'
                },
                'what-is-not': {
                    title: '¿Qué no es Cita Médica en Casa?',
                    'first-paragraph': '<strong>No acudas aquí</strong> si tienes síntomas asociados a al Coronavirus COVID-19 o si sospechas que puedes tenerlo, <strong>sigue las recomendaciones de las autoridades sanitarias</strong>, llama al 112 o a los teléfonos habilitados por las comunidades autónomas.',
                    'second-paragraph': 'Cita Médica en Casa, no es un sustituto del Sistema Nacional de Salud ni de la cita previa con tu médico.'
                }
            },
            'register-doctor': {
                confirmation: {
                    header: {
                        title: 'Solicitud recibida'
                    },
                    content: {
                        message: 'Recibirás una llamada telefónica para verificar tus datos. Muchísimas gracias por unirte a esta iniciativa.'
                    }
                },
                header: {
                    title: '¿Como funciona Cita Médica en Casa para profesionales?'
                },
                content: {
                    'first-paragraph': 'Muchas gracias por prestar tu ayuda.',
                    'second-paragraph': '¿Como funciona xxxxxxx para profesionales?',
                    'list-item-1': 'Debes rellenar el formulario que verás a continuación.',
                    'list-item-2': 'Validamos, mediante una llamada telefónica, que efectivamente eres profesional de la medicina.',
                    'list-item-3': 'Te creamos una cuenta de Gsuite, te enviaremos instrucciones acerca de cómo funciona.',
                    'list-item-4': 'Te damos acceso a la base de datos de consultas de pacientes, accedes con tu email y contraseña que has creado en el formulario.',
                    'list-item-5': 'Escoges al próximo paciente en la lista. Le mandas un email con un enlace de Hangouts o una respuesta por escrito a su consulta.',
                    'list-item-6': 'Marcas esa consulta como reservada, para no duplicar consultas.',
                    'third-paragraph': 'Para añadirte a nuestra base de datos y que puedas atender pacientes necesitamos:'
                },
                fields: {
                    name: 'Nombre',
                    surname: 'Apellidos',
                    speciality: 'Especialidad',
                    license: 'Número de colegiado (no será visible a los pacientes)',
                    email: 'Email (no será visible a los pacientes)',
                    phone: 'Teléfono (no será visible a los pacientes)',
                    password: 'Contraseña',
                    'confirm-password': 'Confirma contraseña',
                }
            },
            'register-patient': {
                confirmation: {
                    header: {
                        title: 'Solicitud recibida'
                    },
                    content: {
                        message: 'Recibirás un email confimándola con un link para acceder a una consulta online, o con una respuesta a tu consulta.'
                    }
                },
                header: {
                    title: '¿Como funciona Cita Médica en Casa para pacientes?'
                },
                content: {
                    'first-paragraph': '¿Cómo funciona Cita Médica en Casa para pacientes?',
                    'list-item-1': 'Rellenas un formulario contándonos cuál es tu dolencia.',
                    'list-item-2': 'Estos datos se enviaran a un doctor o doctora para que concierte una cita contigo o para que resuelva tu consulta por escrito',
                    'list-item-3': 'Te llegará un email con la respuesta o para confirmar tu cita.',
                    'list-item-4': 'Si se trata de una consulta online utilizaréis Hangouts de Google, te enviaremos un link.',
                    'third-paragraph': 'Por favor, para para plantear tu consulta dinos:'
                },
                fields: {
                    age: 'Edad',
                    email: 'Email (para enviarte la cita)',
                    speciality: 'Especialidad (opcional)',
                    summary: 'Resumen de tu problema',
                    'summary-placeholder': 'Dinos cuánto hace que lo tienes, si tomas medicación, enfermedades que tengas como por ejemplo diabetes, alergias... todo lo que nos pueda ayudar a entenderlo mejor.'
                }

            },
            'register-form': {
                submit: 'Enviar',
                error: {
                    required: 'El campo {{field}} es requerido',
                    format: 'El campo {{field}} tiene un formato incorrecto',
                }
            },
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es",
        interpolation: {
        escapeValue: false
        }
    });

export default i18n;
