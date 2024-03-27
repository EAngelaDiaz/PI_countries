const validation = (activityData) => {
    const errors = {};
    if(activityData.id && !/^\d+$/.test(activityData.id)) {
        errors.id = 'No es un valor valido'
    }
    if(activityData.name && !/^[a-zA-Z]+$/.test(activityData.name)) {
        errors.name = 'No es un nombre válido'
    }
    
    if(activityData.difficulty && !/^[1-5]$/.test(activityData.difficulty)) {
        errors.difficulty = 'Debe ser un numero entre 1 y 5 inclusive'
    }
    
    if(activityData.duration && !/^([0-9]{1,2}):([0-5][0-9]):([0-5][0-9])$/.test(activityData.duration)) {
        errors.duration = 'El valor es incorrecto'
    }
    /*if(activityData && activityData.season === '') {
        errors.season = 'El dato no es valido'
    }    
       
    if(activityData.countries.length === 0 ) {
      errors.countries = 'El dato no es valido'
    }*/
    
    return errors;
}

export default validation;