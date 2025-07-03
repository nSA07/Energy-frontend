export type RegisterForm = {
    email: string;
    password: string;
    workSpaceName: string;
    workSpaceAddress: string;
    workSpacePhone: string;
}

export interface WorkspaceFormValues {
  workspaceName: string;
  workspaceAddress: string;
  workspacePhone: string;
}