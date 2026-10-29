import axios from "axios";

const WP_GRAPHQL_URL = "https://admin.encodev.site/graphql";

async function fetchWP(query: string) {
  try {
    const { data } = await axios.post(
      WP_GRAPHQL_URL,
      { query },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );

    return data?.data ?? null;
  } catch (error) {
    console.error("Error conectando con WordPress:", error);
    return null;
  }
}

export const getProjects = async () => {
  const query = `
    query GetProyectos {
      proyectos {
        nodes {
          id
          camposProyecto {
            nombreCliente
            tipoProyecto
            descripcionCorta
            imagenPrincipal {
              node {
                sourceUrl
                altText
              }
            }
            urlProyecto
            fechaEntrega
          }
        }
      }
    }
  `;

  const { proyectos } = await fetchWP(query);
  return proyectos?.nodes ?? [];
};

export const getTestimonials = async () => {
  const query = `
    query GetTestimonios {
      testimonios {
        nodes {
          id
          camposTestimonios {
            nombreCliente
            cargoCliente
            empresaCliente
            descripcion
            testimonio
            resultadoClave
            valoracion
            fotoCliente {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  `;

  const { testimonios } = await fetchWP(query);
  return testimonios?.nodes ?? [];
};
