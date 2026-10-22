interface Projects {
  nombreDelCliente: string;
  tipoDeProyecto: string;
  descripcionCorta: string;
  imagenPrincipal: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  urlDelProyecto: string;
  fechaDeEntrega: string;
}

export interface ProyectoWP {
  id: string;
  camposProyecto: Projects;
}