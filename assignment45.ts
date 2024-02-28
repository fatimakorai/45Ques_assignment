type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function creatingcar(manufacture: string, model: string, optional: Record<string, any>): car {
    return {
        model, 
        manufacture,
        ...optional
    }
}

const mycar: car = creatingcar('Hyundai' ,'Creta', { color: 'Black', year: '2024'})
console.log(mycar)
