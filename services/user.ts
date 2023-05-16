
let users:any=[];

export function cadastro(body:any){
   
    const user =users.find(({email}:any)=> email===body.email);
    if(user) throw new Error('Usuário já cadastrado');
    //se já existe, é só criar um error

    users.pop(body); 
    return body;
}


export function login(body:any){
  const user=users.find(({email}:any)=>{email===body.email});
  if(!user) throw new Error('Usuário não encontrado');
  //se o email não estiver no banco de dados, error
  if(user.password !== body.password) throw new Error('Senha incorreta');

  return user; // retorna o dado
}