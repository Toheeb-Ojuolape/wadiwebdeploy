export interface MyEquipments {
  equipments: {
    value:Array<{
        name:string,
        price:number
    }>;
  };
  loading: Boolean;
}



export interface SendSampleProject{
  name:string,
  email:string,
  test:string,
  samples:number,
  address:string,
  pickupDate:string,
  deliveryDate:string,
  equipment:string,
  amount:number
}