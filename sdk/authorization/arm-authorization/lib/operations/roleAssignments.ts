/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/roleAssignmentsMappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClientContext } from "../authorizationManagementClientContext";

/** Class representing a RoleAssignments. */
export class RoleAssignments {
  private readonly client: AuthorizationManagementClientContext;

  /**
   * Create a RoleAssignments.
   * @param {AuthorizationManagementClientContext} client Reference to the service client.
   */
  constructor(client: AuthorizationManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets role assignments for a resource.
   * @param resourceGroupName The name of the resource group.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get role assignments for.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsListForResourceResponse>
   */
  listForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, options?: Models.RoleAssignmentsListForResourceOptionalParams): Promise<Models.RoleAssignmentsListForResourceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get role assignments for.
   * @param callback The callback
   */
  listForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get role assignments for.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, options: Models.RoleAssignmentsListForResourceOptionalParams, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  listForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, options?: Models.RoleAssignmentsListForResourceOptionalParams | msRest.ServiceCallback<Models.RoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.RoleAssignmentListResult>): Promise<Models.RoleAssignmentsListForResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        options
      },
      listForResourceOperationSpec,
      callback) as Promise<Models.RoleAssignmentsListForResourceResponse>;
  }

  /**
   * Gets role assignments for a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsListForResourceGroupResponse>
   */
  listForResourceGroup(resourceGroupName: string, options?: Models.RoleAssignmentsListForResourceGroupOptionalParams): Promise<Models.RoleAssignmentsListForResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listForResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForResourceGroup(resourceGroupName: string, options: Models.RoleAssignmentsListForResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  listForResourceGroup(resourceGroupName: string, options?: Models.RoleAssignmentsListForResourceGroupOptionalParams | msRest.ServiceCallback<Models.RoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.RoleAssignmentListResult>): Promise<Models.RoleAssignmentsListForResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listForResourceGroupOperationSpec,
      callback) as Promise<Models.RoleAssignmentsListForResourceGroupResponse>;
  }

  /**
   * Deletes a role assignment.
   * @param scope The scope of the role assignment to delete.
   * @param roleAssignmentName The name of the role assignment to delete.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsDeleteMethodResponse>
   */
  deleteMethod(scope: string, roleAssignmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsDeleteMethodResponse>;
  /**
   * @param scope The scope of the role assignment to delete.
   * @param roleAssignmentName The name of the role assignment to delete.
   * @param callback The callback
   */
  deleteMethod(scope: string, roleAssignmentName: string, callback: msRest.ServiceCallback<Models.RoleAssignment>): void;
  /**
   * @param scope The scope of the role assignment to delete.
   * @param roleAssignmentName The name of the role assignment to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(scope: string, roleAssignmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RoleAssignment>): void;
  deleteMethod(scope: string, roleAssignmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RoleAssignment>, callback?: msRest.ServiceCallback<Models.RoleAssignment>): Promise<Models.RoleAssignmentsDeleteMethodResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        roleAssignmentName,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.RoleAssignmentsDeleteMethodResponse>;
  }

  /**
   * Creates a role assignment.
   * @param scope The scope of the role assignment to create. The scope can be any REST resource
   * instance. For example, use '/subscriptions/{subscription-id}/' for a subscription,
   * '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group,
   * and
   * '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}'
   * for a resource.
   * @param roleAssignmentName The name of the role assignment to create. It can be any valid GUID.
   * @param parameters Parameters for the role assignment.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsCreateResponse>
   */
  create(scope: string, roleAssignmentName: string, parameters: Models.RoleAssignmentCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsCreateResponse>;
  /**
   * @param scope The scope of the role assignment to create. The scope can be any REST resource
   * instance. For example, use '/subscriptions/{subscription-id}/' for a subscription,
   * '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group,
   * and
   * '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}'
   * for a resource.
   * @param roleAssignmentName The name of the role assignment to create. It can be any valid GUID.
   * @param parameters Parameters for the role assignment.
   * @param callback The callback
   */
  create(scope: string, roleAssignmentName: string, parameters: Models.RoleAssignmentCreateParameters, callback: msRest.ServiceCallback<Models.RoleAssignment>): void;
  /**
   * @param scope The scope of the role assignment to create. The scope can be any REST resource
   * instance. For example, use '/subscriptions/{subscription-id}/' for a subscription,
   * '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group,
   * and
   * '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}'
   * for a resource.
   * @param roleAssignmentName The name of the role assignment to create. It can be any valid GUID.
   * @param parameters Parameters for the role assignment.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(scope: string, roleAssignmentName: string, parameters: Models.RoleAssignmentCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RoleAssignment>): void;
  create(scope: string, roleAssignmentName: string, parameters: Models.RoleAssignmentCreateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RoleAssignment>, callback?: msRest.ServiceCallback<Models.RoleAssignment>): Promise<Models.RoleAssignmentsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        roleAssignmentName,
        parameters,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.RoleAssignmentsCreateResponse>;
  }

  /**
   * Get the specified role assignment.
   * @param scope The scope of the role assignment.
   * @param roleAssignmentName The name of the role assignment to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsGetResponse>
   */
  get(scope: string, roleAssignmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsGetResponse>;
  /**
   * @param scope The scope of the role assignment.
   * @param roleAssignmentName The name of the role assignment to get.
   * @param callback The callback
   */
  get(scope: string, roleAssignmentName: string, callback: msRest.ServiceCallback<Models.RoleAssignment>): void;
  /**
   * @param scope The scope of the role assignment.
   * @param roleAssignmentName The name of the role assignment to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(scope: string, roleAssignmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RoleAssignment>): void;
  get(scope: string, roleAssignmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RoleAssignment>, callback?: msRest.ServiceCallback<Models.RoleAssignment>): Promise<Models.RoleAssignmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        roleAssignmentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RoleAssignmentsGetResponse>;
  }

  /**
   * Deletes a role assignment.
   * @param roleId The ID of the role assignment to delete.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsDeleteByIdResponse>
   */
  deleteById(roleId: string, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsDeleteByIdResponse>;
  /**
   * @param roleId The ID of the role assignment to delete.
   * @param callback The callback
   */
  deleteById(roleId: string, callback: msRest.ServiceCallback<Models.RoleAssignment>): void;
  /**
   * @param roleId The ID of the role assignment to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteById(roleId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RoleAssignment>): void;
  deleteById(roleId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RoleAssignment>, callback?: msRest.ServiceCallback<Models.RoleAssignment>): Promise<Models.RoleAssignmentsDeleteByIdResponse> {
    return this.client.sendOperationRequest(
      {
        roleId,
        options
      },
      deleteByIdOperationSpec,
      callback) as Promise<Models.RoleAssignmentsDeleteByIdResponse>;
  }

  /**
   * Creates a role assignment by ID.
   * @param roleId The ID of the role assignment to create.
   * @param parameters Parameters for the role assignment.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsCreateByIdResponse>
   */
  createById(roleId: string, parameters: Models.RoleAssignmentCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsCreateByIdResponse>;
  /**
   * @param roleId The ID of the role assignment to create.
   * @param parameters Parameters for the role assignment.
   * @param callback The callback
   */
  createById(roleId: string, parameters: Models.RoleAssignmentCreateParameters, callback: msRest.ServiceCallback<Models.RoleAssignment>): void;
  /**
   * @param roleId The ID of the role assignment to create.
   * @param parameters Parameters for the role assignment.
   * @param options The optional parameters
   * @param callback The callback
   */
  createById(roleId: string, parameters: Models.RoleAssignmentCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RoleAssignment>): void;
  createById(roleId: string, parameters: Models.RoleAssignmentCreateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RoleAssignment>, callback?: msRest.ServiceCallback<Models.RoleAssignment>): Promise<Models.RoleAssignmentsCreateByIdResponse> {
    return this.client.sendOperationRequest(
      {
        roleId,
        parameters,
        options
      },
      createByIdOperationSpec,
      callback) as Promise<Models.RoleAssignmentsCreateByIdResponse>;
  }

  /**
   * Gets a role assignment by ID.
   * @param roleId The ID of the role assignment to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsGetByIdResponse>
   */
  getById(roleId: string, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsGetByIdResponse>;
  /**
   * @param roleId The ID of the role assignment to get.
   * @param callback The callback
   */
  getById(roleId: string, callback: msRest.ServiceCallback<Models.RoleAssignment>): void;
  /**
   * @param roleId The ID of the role assignment to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  getById(roleId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RoleAssignment>): void;
  getById(roleId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RoleAssignment>, callback?: msRest.ServiceCallback<Models.RoleAssignment>): Promise<Models.RoleAssignmentsGetByIdResponse> {
    return this.client.sendOperationRequest(
      {
        roleId,
        options
      },
      getByIdOperationSpec,
      callback) as Promise<Models.RoleAssignmentsGetByIdResponse>;
  }

  /**
   * Gets all role assignments for the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsListResponse>
   */
  list(options?: Models.RoleAssignmentsListOptionalParams): Promise<Models.RoleAssignmentsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.RoleAssignmentsListOptionalParams, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  list(options?: Models.RoleAssignmentsListOptionalParams | msRest.ServiceCallback<Models.RoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.RoleAssignmentListResult>): Promise<Models.RoleAssignmentsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.RoleAssignmentsListResponse>;
  }

  /**
   * Gets role assignments for a scope.
   * @param scope The scope of the role assignments.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsListForScopeResponse>
   */
  listForScope(scope: string, options?: Models.RoleAssignmentsListForScopeOptionalParams): Promise<Models.RoleAssignmentsListForScopeResponse>;
  /**
   * @param scope The scope of the role assignments.
   * @param callback The callback
   */
  listForScope(scope: string, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  /**
   * @param scope The scope of the role assignments.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForScope(scope: string, options: Models.RoleAssignmentsListForScopeOptionalParams, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  listForScope(scope: string, options?: Models.RoleAssignmentsListForScopeOptionalParams | msRest.ServiceCallback<Models.RoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.RoleAssignmentListResult>): Promise<Models.RoleAssignmentsListForScopeResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        options
      },
      listForScopeOperationSpec,
      callback) as Promise<Models.RoleAssignmentsListForScopeResponse>;
  }

  /**
   * Gets role assignments for a resource.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsListForResourceNextResponse>
   */
  listForResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsListForResourceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listForResourceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForResourceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  listForResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.RoleAssignmentListResult>): Promise<Models.RoleAssignmentsListForResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listForResourceNextOperationSpec,
      callback) as Promise<Models.RoleAssignmentsListForResourceNextResponse>;
  }

  /**
   * Gets role assignments for a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsListForResourceGroupNextResponse>
   */
  listForResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsListForResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listForResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  listForResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.RoleAssignmentListResult>): Promise<Models.RoleAssignmentsListForResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listForResourceGroupNextOperationSpec,
      callback) as Promise<Models.RoleAssignmentsListForResourceGroupNextResponse>;
  }

  /**
   * Gets all role assignments for the subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.RoleAssignmentListResult>): Promise<Models.RoleAssignmentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.RoleAssignmentsListNextResponse>;
  }

  /**
   * Gets role assignments for a scope.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RoleAssignmentsListForScopeNextResponse>
   */
  listForScopeNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RoleAssignmentsListForScopeNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listForScopeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForScopeNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RoleAssignmentListResult>): void;
  listForScopeNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.RoleAssignmentListResult>): Promise<Models.RoleAssignmentsListForScopeNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listForScopeNextOperationSpec,
      callback) as Promise<Models.RoleAssignmentsListForScopeNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listForResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/roleAssignments",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/roleAssignments",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}",
  urlParameters: [
    Parameters.scope,
    Parameters.roleAssignmentName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}",
  urlParameters: [
    Parameters.scope,
    Parameters.roleAssignmentName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RoleAssignmentCreateParameters,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.RoleAssignment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}",
  urlParameters: [
    Parameters.scope,
    Parameters.roleAssignmentName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{roleId}",
  urlParameters: [
    Parameters.roleId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{roleId}",
  urlParameters: [
    Parameters.roleId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RoleAssignmentCreateParameters,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.RoleAssignment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{roleId}",
  urlParameters: [
    Parameters.roleId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/roleAssignments",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Authorization/roleAssignments",
  urlParameters: [
    Parameters.scope
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForResourceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForScopeNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
