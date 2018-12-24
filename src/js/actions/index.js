export const saveData = (array) => ( { type:'save', payload: array } );
export const totalPage = (number) => ( { type:'totalPage', payload:number } );
export const inputValue = (string) => ( { type:'inputValue', payload:string } );
export const currentPage = (number) => ( { type:'currentPage', payload:number } );
export const updateData = (array) => ( { type:'updateData', payload:array } );
