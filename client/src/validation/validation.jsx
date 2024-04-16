const validation = (activityData) => {
    const errors = {};

    if(activityData.id && !/^\d+$/.test(activityData.id)) {
        errors.id = 'No es un valor valido'
    }

    if(activityData.name && !/^[a-zA-Z]+$/.test(activityData.name)) {
        errors.name = 'No es un nombre válido'
    }
    
    if(activityData.difficulty && !/^[1-5]$/.test(activityData.difficulty)) {
        errors.difficulty = 'Solo valor entre 1 y 5'
    }
    
    if(activityData.duration && !/^([0-9]{1,2}):([0-5][0-9]):([0-5][0-9])$/.test(activityData.duration)) {
        errors.duration = 'El valor es incorrecto'
    }
    if(activityData.season !== 'Otoño' && activityData.season !== 'Primavera' && activityData.season !== 'Verano' && activityData.season !== 'Invierno') {
        errors.season = 'El valor ingresado no es una temporada'
    }    
       
    
    return errors;
}

export default validation;