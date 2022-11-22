import axios from 'axios';

type Setter = (agentes: any) => void;

export function tokenfromkeycloak(setter: Setter, role: string) {
  const keycloakEndpoint = process.env.VUE_APP_KEYCLOAK_URL + 
      "/realms/" +
        process.env.VUE_APP_KEYCLOAK_ADMIN_REALM +
        "/protocol/openid-connect/token";
        axios
        .post(
          keycloakEndpoint,
          new URLSearchParams({
            client_id: process.env.VUE_APP_KEYCLOAK_ADMIN_CLIENT_ID,
            username: process.env.VUE_APP_KEYCLOAK_ADMIN_USERNAME,
            password: process.env.VUE_APP_KEYCLOAK_ADMIN_PASSWORD,
            grant_type: process.env.VUE_APP_KEYCLOAK_GRANT_TYPE,
          }),
        )
        .then((res) => {
          getAgentUsers(res.data.access_token, setter, role);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
}

function getAgentUsers(token: string, setter: Setter, role: string) {
  const keycloakEndpoint = process.env.VUE_APP_KEYCLOAK_URL +
    "/admin/realms/" +
    process.env.VUE_APP_KEYCLOAK_REALM +
    "/clients/" +
    process.env.VUE_APP_KEYCLOAK_CLIENTID_ID +
    `/roles/${role}/users`;
  axios.get(keycloakEndpoint, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => {
      console.log(res.data);
      setter(res.data);
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
}