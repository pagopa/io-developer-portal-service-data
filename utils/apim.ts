import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";

export interface IServicePrincipalCreds {
  readonly clientId: string;
  readonly secret: string;
  readonly tenantId: string;
}

export interface IAzureApimConfig {
  readonly subscriptionId: string;
  readonly apimResourceGroup: string;
  readonly apim: string;
}
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function getApiClient(subscriptionId: string): ApiManagementClient {
  return new ApiManagementClient(new DefaultAzureCredential(), subscriptionId);
}
