export interface CreateUsuarioDTO {
  nome: string;
  data_nascimento: Date;
  email: string;
  senha: string;
  municipio_id: number;
  tipo_usuario_id: number;
  tipo_cadastro_id: number;
}