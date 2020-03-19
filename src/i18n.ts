import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    es: {
        translation: {
            footer: {
                'powered-by': 'Hecho con mucho cariño en Madrid :)'
            },
            header: {
                admin: {
                    doctors: 'Médicos por validar',
                },
                doctor: {
                    pending: 'Pendientes',
                    own: 'Mis peticiones'
                },
                login: 'login',
                title: 'Cita Médica en Casa',
                dashboard: 'dashboard'
            },
            home: {
                'claim': {
                    title: '#QuédateEnCasa y consulta a un médico'
                },
                'how-does-it-work': {
                    title: '¿Cómo funciona?',
                    'first-paragraph': 'Ponemos en contacto a médicos y ciudadanos <strong>a través de email o videollamada</strong>, para resolver dudas. Queremos reducir la sobrecarga de hospitales y centros de salud en consultas leves. '

                },
                'pacient': {
                    title: 'Para ciudadanos/as',
                    'first-paragraph': 'Plantea una duda médica, excepto sobre el Coronavirus. <strong>Si tienes una emergencia <a target="_blank" href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/telefonos.htm">aquí tienes un listado de teléfonos de las autoridades sanitarias</a>, no esperes a que te atendamos en esta web.</strong>',
                    cta: 'Realizar una consulta'
                },
                'doctor': {
                    title: 'Para Médicos/as',
                    'first-paragraph': 'Presta tu ayuda a personas que no pueden acudir a una consulta.',
                    'register-button': 'Registrarme',
                    login: 'Acceder con mi cuenta',
                },
                'what-is-not': {
                    title: '¿Qué no es Cita Médica en Casa?',
                    'first-paragraph': '<strong>No acudas aquí</strong> si tienes síntomas asociados a al Coronavirus COVID-19 o si sospechas que puedes tenerlo, <strong><a target="_blank" href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/documentos/20200306_Preguntas_respuestas_2019-nCoV.pdf">sigue las recomendaciones de las autoridades sanitarias</a></strong> o <strong><a target="_blank" href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/telefonos.htm">llama a los teléfonos habilitados por las comunidades autónomas</a></strong> para este fin <strong><a target="_blank" href="https://www.coronamadrid.com/">o utiliza www.coronamadrid.com</a></strong>.',
                    'second-paragraph': 'Cita Médica en Casa, <strong>no es un sustituto del Sistema Nacional de Salud ni de la cita presencial con tu médico. No es un servicio médico de diagnóstico ni de prescripción de tratamientos</strong> de ningún tipo.'
                },
                'what-is': {
                    title: 'Qué y quiénes somos',
                    'first-paragraph': 'Cita Médica en Casa <strong>no es un servicio médico</strong>, solo intermedia entre ciudadanos y médicos para evitar las visitas innecesarias a centros de salud. <strong>Cita Médica en Casa no se hace responsable de los contenidos ni de las opiniones intercambiados entre profesionales de la salud y ciudadanos.</strong>',
                    'second-paragraph': 'Tanto el equipo técnico y de diseño que ha creado esta plataforma, como los médicos (comprobamos su número de colegiado/a) que colaboran <strong>somos voluntarios</strong>. Simplemente queremos echar una mano ante la situación creada por el Coronavirus.',
                },
                privacy: {
                    title: '¿Cómo trataremos tus datos?'
                },
                'privacy-doctor': {
                    title: 'Si eres profesional',
                    'first-paragraph': '<strong>Nunca los cederemos a terceros</strong>, ni se utilizarán para otro fin que no sea el de esta plataforma.',
                    'second-paragraph': '<strong>Los pacientes solo verán tu email</strong>. Si lo deseas, podrás crearte uno específico para la platafoma y preservar tu intimidad.',
                    'third-paragraph': 'Una vez finalizada esta situación <strong>la plataforma Cita Médica en Casa desaparecerá</strong> y será borrada. En cualquier caso, puedes solicitar el borrado de tus datos en cualquier momento. Escribe un correo a <a href="mailto:pati@citamedicaencasa.com">pati@citamedicaencasa.com</a> solicitándolo.'

                },
                'privacy-patient': {
                    title: 'Si eres ciudadano/a',
                    'first-paragraph': '<strong>Nunca los cederemos a terceros</strong>, ni se utilizarán para otro fin que no sea el de esta plataforma.',
                    'second-paragraph': '<strong>Los datos del formulario que has rellenado solo los verá personal médico</strong>.',
                    'third-paragraph': 'Una vez finalizada esta situación <strong>la plataforma Cita Médica en Casa desaparecerá</strong> y será borrada. En cualquier caso, puedes solicitar el borrado de tus datos en cualquier momento. Escribe un correo a <a href="mailto:pati@citamedicaencasa.com">pati@citamedicaencasa.com</a> solicitándolo.'
                }
            },
            inquiry: {
                attend: 'Atender petición',
                unattend: 'Desatender petición',
                'created-at': 'Recibido el {{createdAtDate}} a las {{createdAtTime}}',
                email: 'Email del ciudadano:',
                speciality: 'Especialidad:'
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
                    'list-item-1': 'Debes <strong>rellenar el formulario</strong> que verás a continuación.',
                    'list-item-2': 'Te validamos, comprobando tu número de colegiado/a.',
                    'list-item-3': '<strong>Puedes utilizar tu email personal o, si lo prefieres, crear una cuenta</strong> de Gsuite (Google), te enviaremos instrucciones acerca de cómo funciona.',
                    'list-item-4': '<strong>Te damos acceso al recopilatorio de dudas</strong> de ciudadanos accedes con tu email y contraseña que has creado en el formulario.',
                    'list-item-5': '<strong>Escoges a una duda de la lista y envías un email con una respuesta</strong> por escrito a su consulta. Si necesitas tener una videollamada con la persona que plantea la duda, escríbenos al email: <a href="mailto:pati@citamedicaencasa.com">pati@citamedicaencasa.com</a> y te facilitaremos un enlace y los pasos a seguir',
                    'form-header': 'Para añadirte a nuestra base de datos y que puedas atender pacientes necesitamos:',
                    'responsability': 'Recuerda que Cita Médica en Casa, no sustituye al Servicio nacional de salud, ni a la visita a tu médico y no te proporcionará un diagnóstico o un tratamiento. Cita Médica en casa no se hace responsable de los contenidos ni de las opiniones intercambiadas entre profesionales de la medicina y ciudadanos.'
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
                    'terms': '<a target="_blank" href="/static/consentimiento.pdf">Acepto que mis datos se incorporen a Cita médica en Casa.</a>',
                    'privacy': '<a target="_blank" href="/static/politica_privacidad.pdf">Me comprometo a no hacer públicos datos de pacientes.</a>',
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
                    title: '¿Como funciona Cita Médica en Casa para ciudadanos?'
                },
                content: {
                    'list-item-1': 'Rellenas un formulario con tu duda que no tenga que ver con el Coronavirus, tus datos y tu pregunta serán cifrados para preservar su confidencialidad.',
                    'list-item-2': 'Estos datos se enviaran a un doctor o doctora para que concierte una videollamada contigo o para que resuelva tu consulta por email.',
                    'list-item-3': 'Te llegará un email con la respuesta o para confirmar tu videollamada.',
                    'list-item-4': 'Si se trata de una consulta online utilizaréis Hangouts de Google, te enviaremos un link.',
                    'form-header': 'Por favor, para para plantear tu consulta dinos:',
                    'responsability': 'Recuerda que Cita Médica en Casa, no sustituye al Servicio nacional de salud, ni a la visita a tu médico y no te proporcionará un diagnóstico o un tratamiento. Cita Médica en casa no se hace responsable de los contenidos ni de las opiniones intercambiadas entre profesionales de la medicina y ciudadanos.'
                },
                fields: {
                    age: 'Edad',
                    email: 'Email (para enviarte la cita)',
                    'confirm-email': 'Confirma email',
                    speciality: 'Especialidad (opcional)',
                    summary: 'Resumen de tu problema',
                    'summary-placeholder': 'Resumen de tu duda: Dinos cuánto hace que lo tienes, si tomas medicación, enfermedades que tengas como por ejemplo diabetes, alergias... todo lo que nos pueda ayudar a entenderlo mejor. No escribas aquí tus datos personales.',
                    'terms': '<a target="_blank" href="/static/consentimiento.pdf">Acepto compartir mis datos personales con el personal médico.</a>',
                    'privacy': '<a target="_blank" href="/static/politica_privacidad.pdf">Acepto la política de privacidad y la protección de datos.</a>',
                    'submit': 'Enviar duda'
                }
            },
            'register-form': {
                submit: 'Registrarme',
                error: {
                    required: 'El campo es requerido',
                    format: 'El campo tiene un formato incorrecto',
                    accept: 'Es necesario aceptar los términos',
                    confirm: 'El campo no coincide',
                }
            },
            'login-form': {
                submit: 'Enviar',
                error: {
                    required: 'El campo es requerido',
                    format: 'El campo tiene un formato incorrecto',
                    accept: 'Es necesario aceptar los términos',
                },
                fields: {
                    email: 'Email',
                    password: 'Contraseña'
                }
            },
            doctor: {
                'created-at': 'Recibido el {{createdAtDate}} a las {{createdAtTime}}',
                name: 'Nombre:',
                surname: 'Apellidos:',
                license: 'Número colegiado:',
                email: 'Email:',
                phone: 'Teléfono:',
                speciality: 'Especialidad:',
                validate: 'Validar'
            },
            'doctor-dashboard': {
                header: {
                    title: 'Listado de dudas planteadas'
                },
                content: {
                    'first-paragraph': 'Cita Médica en Casa está pensada para la resolución de dudas sencillas de salud. No es un plataforma para diagnosticar o preescribir medicamentos, tampoco se atenderán preguntas sobre Coronavirus, ese tema está en manos de los canales oficiales del Estado.',
                    'second-paragraph': 'Mil gracias de nuevo por tu ayuda.'
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
