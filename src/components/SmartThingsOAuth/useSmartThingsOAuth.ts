type RedirectParams = {
  state: string;
  clientId: string;
  redirectUri: string;
};

function useSmartThingsOAuth() {
  const redirect = (params: RedirectParams) => {
    // redirect url 에 지점 ID 와 maintainer id 를 포함해 전송
    const url = `https://api.smartthings.com/oauth/authorize?client_id=${params.clientId}&response_type=code&redirect_uri=${params.redirectUri}&scope=r:devices:*+w:devices:*+x:devices:*&state=${params.state}`;
    window.open(url, "_blank", "width=500,height=600");
  };

  return {
    redirect,
  };
}

export default useSmartThingsOAuth;
