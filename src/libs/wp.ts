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

  try {
    const res = await fetch("https://admin.encodev.site/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const text = await res.text();

    if (!res.ok) {
      console.error("Error HTTP WordPress:", res.status);
      console.error("Respuesta:", text.slice(0, 500));
      return [];
    }

    let json;

    try {
      json = JSON.parse(text);
    } catch {
      console.error("WordPress no devolvió JSON:", text.slice(0, 500));
      return [];
    }

    if (json.errors) {
      console.error("Errores GraphQL:", json.errors);
      return [];
    }

    return json.data?.proyectos?.nodes ?? [];
  } catch (error) {
    console.error("Error conectando con WordPress:", error);
    return [];
  }
};
