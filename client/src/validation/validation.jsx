const validation = (activityData) => {
    const errors = {};
    if( !/^\d+$/.test(activityData.id)) {
        errors.id = 'No es un valor valido'
    }
    if(!/^[a-zA-Z]+$/.test(activityData.name)) {
        errors.name = 'No es un nombre válido'
    }
    if(activityData.name === '') {
        errors.name = 'El campo no puede estar vacío'
    }
    if(!/^[1-5]$/.test(activityData.difficulty)) {
        errors.difficulty = 'Debe ser un numero entre 1 y 5 inclusive'
    }
    if(activityData.difficulty === '') {
      errors.difficulty = 'El campo no puede estar vacío'
    }
    
    if(!/^([0-9]{1,2}):([0-5][0-9]):([0-5][0-9])$/.test(activityData.duration)) {
        errors.duration = 'El valor es incorrecto'
    }
    if(activityData.season === '') {
        errors.season = 'El campo no puede estar vacío'
    }    
    if(!['Verano', 'Otoño', 'Primavera', 'Invierno'].includes(activityData.season)) {
        errors.season = 'El dato no es valido'
    }
    
    if(activityData.countries.length === 0) {
      errors.countries = 'El campo no puede estar vacío'
    }
    
    return errors;
}

export default validation;