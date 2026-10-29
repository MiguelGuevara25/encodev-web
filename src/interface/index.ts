interface Projects {
  nombreCliente: string;
  tipoProyecto: string;
  descripcionCorta: string;
  imagenPrincipal: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  urlProyecto: string;
  fechaEntrega: string;
}

export interface ProyectoWP {
  id: string;
  camposProyecto: Projects;
}

export interface Testimonial {
  nombreCliente: string;
  cargoCliente: string;
  empresaCliente: string;
  descripcion: string;
  testimonio: string;
  resultadoClave: string;
  valoracion: number;
  fotoCliente: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export interface TestimonialWP {
  id: string;
  camposTestimonios: Testimonial;
}
