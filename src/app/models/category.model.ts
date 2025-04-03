export interface Category {
    categoryId: number;
    nombre: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    estado: string;
  }
  
  export interface CategoryDTO {
    nombre: string;
  }
  
  export interface UpdateCategoryDTO {
    categoryId: number;
    nombre: string;
    estado: string;
  }
  