export class Post {
    postId: number;
    nombre: string;
    contenido: string;
    fechaCreacion: Date | null;  
    fechaActualizacion: Date | null;  
    estado: string;
  
    constructor(
      postId: number = 0,
      nombre: string = '',
      contenido: string = '',
      fechaCreacion: Date | null = null,  
      fechaActualizacion: Date | null = null,  
      estado: string = 'Activo'
    ) {
      this.postId = postId;
      this.nombre = nombre;
      this.contenido = contenido;
      this.fechaCreacion = fechaCreacion;
      this.fechaActualizacion = fechaActualizacion;
      this.estado = estado;
    }
  }
  