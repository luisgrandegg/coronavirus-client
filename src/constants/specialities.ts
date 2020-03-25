export interface ISpeciality {
    label: string;
    value: string;
}

const defaultSpeciality = {
	"label": "Otros",
	"value": "otros"
};

export const getSpecialityLabel = (value?: string | null): string => {
    if (!value) {
        return defaultSpeciality.label;
    }

    const speciality = specialities.filter((speciality: ISpeciality) => {
        return speciality.value === value;
    })[0];

    return speciality ? speciality.label : defaultSpeciality.label;
};

export const specialities = [
    {
    	"label": "Aparato digestivo",
    	"value": "aparato_digestivo"
    }, {
    	"label": "Cardiología",
    	"value": "cardiologia"
    }, {
	    "label": "Dermatología",
    	"value": "dermatologia"
    }, {
    	"label": "Endocrino y nutrición",
    	"value": "endocrino_y_nutricion"
    }, {
    	"label": "Geriatría",
    	"value": "geriatria"
    }, {
    	"label": "Ginecología y obstetricia",
    	"value": "ginecologia_y_obstetricia"
    }, {
    	"label": "Medicina de familia",
    	"value": "medicina_de_familia"
    }, {
        "label": "Enfermedades Infecciosas/Medicina interna",
        "value": "medicina_interna"
    }, {
    	"label": "Nefrología",
    	"value": "nefrologia"
    }, {
    	"label": "Neurología",
    	"value": "neurologia"
    }, {
    	"label": "Neumología",
    	"value": "neumologia"
    }, {
    	"label": "Oftalmología",
    	"value": "oftalmologia"
    }, {
    	"label": "Otorrinolaringología",
    	"value": "otorrinolaringologia"
    }, {
    	"label": "Pediatría",
    	"value": "pediatria"
    }, {
    	"label": "Psiquiatría",
    	"value": "psiquiatria"
    }, {
    	"label": "Rehabilitación",
    	"value": "Rehabilitacion"
    }, {
    	"label": "Traumatología y cirugía ortopédica",
    	"value": "traumatologia_y_cirugia_ortopedica"
    }, {
    	"label": "Urología",
    	"value": "urologia"
    },
    defaultSpeciality
];

export default specialities;
