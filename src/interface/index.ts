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