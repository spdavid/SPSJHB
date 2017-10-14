import pnp from "sp-pnp-js";


export interface iCar
{
    Title : string;
    carBrand : string;
    carColor : string;
    carYear : number;
    carModel : string;
}

export  class Cars
{
    
  static getALLCars() : Promise<Array<iCar>>
  {
      return new Promise((resolve, reject) => {
        pnp.sp.web.lists.getByTitle('Cars').items.get().then(
            (data) => {
                console.log(data)
              resolve(data);
            }
        );

      });
  }


  static AddACar(car : iCar)
  {
    pnp.sp.web.lists.getByTitle('Cars').items.add(car).then(
        (result) => {
                console.log(result);

    });
  }
}