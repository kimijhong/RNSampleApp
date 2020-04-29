const ERROR_MESSAGES = {
    10: 'Access to your account has been suspended. Please contact TMDb',
    11: '네트워크 문제로 접속이 원활하지 않습니다. 연결 상태를 확인 후 다시 시도해 주세요.',
    14: 'Authentication failed',
    30: 'Invalid username and/or password',
    31: 'Your account is no longer active. Please contact TMDb',
    32: 'Your email address has not been verified',
    default: '나중에 다시 시도하십시오.'
  };
  
  export const getTmdbErrorMessage = (errorCode: string | number) => ERROR_MESSAGES[errorCode] || ERROR_MESSAGES.default;