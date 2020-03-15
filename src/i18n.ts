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
            }
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
