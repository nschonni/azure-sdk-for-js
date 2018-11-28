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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import * as operations from "./operations";
import { NetworkManagementClientContext } from "./networkManagementClientContext";


class NetworkManagementClient extends NetworkManagementClientContext {
  // Operation groups
  applicationGateways: operations.ApplicationGateways;
  applicationSecurityGroups: operations.ApplicationSecurityGroups;
  availableDelegations: operations.AvailableDelegations;
  availableResourceGroupDelegations: operations.AvailableResourceGroupDelegations;
  azureFirewalls: operations.AzureFirewalls;
  azureFirewallFqdnTags: operations.AzureFirewallFqdnTags;
  ddosProtectionPlans: operations.DdosProtectionPlans;
  availableEndpointServices: operations.AvailableEndpointServices;
  expressRouteCircuitAuthorizations: operations.ExpressRouteCircuitAuthorizations;
  expressRouteCircuitPeerings: operations.ExpressRouteCircuitPeerings;
  expressRouteCircuitConnections: operations.ExpressRouteCircuitConnections;
  expressRouteCircuits: operations.ExpressRouteCircuits;
  expressRouteServiceProviders: operations.ExpressRouteServiceProviders;
  expressRouteCrossConnections: operations.ExpressRouteCrossConnections;
  expressRouteCrossConnectionPeerings: operations.ExpressRouteCrossConnectionPeerings;
  expressRouteGateways: operations.ExpressRouteGateways;
  expressRouteConnections: operations.ExpressRouteConnections;
  expressRoutePortsLocations: operations.ExpressRoutePortsLocations;
  expressRoutePorts: operations.ExpressRoutePorts;
  expressRouteLinks: operations.ExpressRouteLinks;
  interfaceEndpoints: operations.InterfaceEndpoints;
  loadBalancers: operations.LoadBalancers;
  loadBalancerBackendAddressPools: operations.LoadBalancerBackendAddressPools;
  loadBalancerFrontendIPConfigurations: operations.LoadBalancerFrontendIPConfigurations;
  inboundNatRules: operations.InboundNatRules;
  loadBalancerLoadBalancingRules: operations.LoadBalancerLoadBalancingRules;
  loadBalancerOutboundRules: operations.LoadBalancerOutboundRules;
  loadBalancerNetworkInterfaces: operations.LoadBalancerNetworkInterfaces;
  loadBalancerProbes: operations.LoadBalancerProbes;
  networkInterfaces: operations.NetworkInterfaces;
  networkInterfaceIPConfigurations: operations.NetworkInterfaceIPConfigurations;
  networkInterfaceLoadBalancers: operations.NetworkInterfaceLoadBalancers;
  networkInterfaceTapConfigurations: operations.NetworkInterfaceTapConfigurations;
  networkProfiles: operations.NetworkProfiles;
  networkSecurityGroups: operations.NetworkSecurityGroups;
  securityRules: operations.SecurityRules;
  defaultSecurityRules: operations.DefaultSecurityRules;
  networkWatchers: operations.NetworkWatchers;
  packetCaptures: operations.PacketCaptures;
  connectionMonitors: operations.ConnectionMonitors;
  operations: operations.Operations;
  publicIPAddresses: operations.PublicIPAddresses;
  publicIPPrefixes: operations.PublicIPPrefixes;
  routeFilters: operations.RouteFilters;
  routeFilterRules: operations.RouteFilterRules;
  routeTables: operations.RouteTables;
  routes: operations.Routes;
  bgpServiceCommunities: operations.BgpServiceCommunities;
  serviceEndpointPolicies: operations.ServiceEndpointPolicies;
  serviceEndpointPolicyDefinitions: operations.ServiceEndpointPolicyDefinitions;
  usages: operations.Usages;
  virtualNetworks: operations.VirtualNetworks;
  subnets: operations.Subnets;
  virtualNetworkPeerings: operations.VirtualNetworkPeerings;
  virtualNetworkGateways: operations.VirtualNetworkGateways;
  virtualNetworkGatewayConnections: operations.VirtualNetworkGatewayConnections;
  localNetworkGateways: operations.LocalNetworkGateways;
  virtualNetworkTaps: operations.VirtualNetworkTaps;
  virtualWans: operations.VirtualWans;
  vpnSites: operations.VpnSites;
  vpnSitesConfiguration: operations.VpnSitesConfiguration;
  virtualHubs: operations.VirtualHubs;
  hubVirtualNetworkConnections: operations.HubVirtualNetworkConnections;
  vpnGateways: operations.VpnGateways;
  vpnConnections: operations.VpnConnections;
  p2sVpnServerConfigurations: operations.P2sVpnServerConfigurations;
  p2sVpnGateways: operations.P2sVpnGateways;

  /**
   * Initializes a new instance of the NetworkManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription credentials which uniquely identify the Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.NetworkManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.applicationGateways = new operations.ApplicationGateways(this);
    this.applicationSecurityGroups = new operations.ApplicationSecurityGroups(this);
    this.availableDelegations = new operations.AvailableDelegations(this);
    this.availableResourceGroupDelegations = new operations.AvailableResourceGroupDelegations(this);
    this.azureFirewalls = new operations.AzureFirewalls(this);
    this.azureFirewallFqdnTags = new operations.AzureFirewallFqdnTags(this);
    this.ddosProtectionPlans = new operations.DdosProtectionPlans(this);
    this.availableEndpointServices = new operations.AvailableEndpointServices(this);
    this.expressRouteCircuitAuthorizations = new operations.ExpressRouteCircuitAuthorizations(this);
    this.expressRouteCircuitPeerings = new operations.ExpressRouteCircuitPeerings(this);
    this.expressRouteCircuitConnections = new operations.ExpressRouteCircuitConnections(this);
    this.expressRouteCircuits = new operations.ExpressRouteCircuits(this);
    this.expressRouteServiceProviders = new operations.ExpressRouteServiceProviders(this);
    this.expressRouteCrossConnections = new operations.ExpressRouteCrossConnections(this);
    this.expressRouteCrossConnectionPeerings = new operations.ExpressRouteCrossConnectionPeerings(this);
    this.expressRouteGateways = new operations.ExpressRouteGateways(this);
    this.expressRouteConnections = new operations.ExpressRouteConnections(this);
    this.expressRoutePortsLocations = new operations.ExpressRoutePortsLocations(this);
    this.expressRoutePorts = new operations.ExpressRoutePorts(this);
    this.expressRouteLinks = new operations.ExpressRouteLinks(this);
    this.interfaceEndpoints = new operations.InterfaceEndpoints(this);
    this.loadBalancers = new operations.LoadBalancers(this);
    this.loadBalancerBackendAddressPools = new operations.LoadBalancerBackendAddressPools(this);
    this.loadBalancerFrontendIPConfigurations = new operations.LoadBalancerFrontendIPConfigurations(this);
    this.inboundNatRules = new operations.InboundNatRules(this);
    this.loadBalancerLoadBalancingRules = new operations.LoadBalancerLoadBalancingRules(this);
    this.loadBalancerOutboundRules = new operations.LoadBalancerOutboundRules(this);
    this.loadBalancerNetworkInterfaces = new operations.LoadBalancerNetworkInterfaces(this);
    this.loadBalancerProbes = new operations.LoadBalancerProbes(this);
    this.networkInterfaces = new operations.NetworkInterfaces(this);
    this.networkInterfaceIPConfigurations = new operations.NetworkInterfaceIPConfigurations(this);
    this.networkInterfaceLoadBalancers = new operations.NetworkInterfaceLoadBalancers(this);
    this.networkInterfaceTapConfigurations = new operations.NetworkInterfaceTapConfigurations(this);
    this.networkProfiles = new operations.NetworkProfiles(this);
    this.networkSecurityGroups = new operations.NetworkSecurityGroups(this);
    this.securityRules = new operations.SecurityRules(this);
    this.defaultSecurityRules = new operations.DefaultSecurityRules(this);
    this.networkWatchers = new operations.NetworkWatchers(this);
    this.packetCaptures = new operations.PacketCaptures(this);
    this.connectionMonitors = new operations.ConnectionMonitors(this);
    this.operations = new operations.Operations(this);
    this.publicIPAddresses = new operations.PublicIPAddresses(this);
    this.publicIPPrefixes = new operations.PublicIPPrefixes(this);
    this.routeFilters = new operations.RouteFilters(this);
    this.routeFilterRules = new operations.RouteFilterRules(this);
    this.routeTables = new operations.RouteTables(this);
    this.routes = new operations.Routes(this);
    this.bgpServiceCommunities = new operations.BgpServiceCommunities(this);
    this.serviceEndpointPolicies = new operations.ServiceEndpointPolicies(this);
    this.serviceEndpointPolicyDefinitions = new operations.ServiceEndpointPolicyDefinitions(this);
    this.usages = new operations.Usages(this);
    this.virtualNetworks = new operations.VirtualNetworks(this);
    this.subnets = new operations.Subnets(this);
    this.virtualNetworkPeerings = new operations.VirtualNetworkPeerings(this);
    this.virtualNetworkGateways = new operations.VirtualNetworkGateways(this);
    this.virtualNetworkGatewayConnections = new operations.VirtualNetworkGatewayConnections(this);
    this.localNetworkGateways = new operations.LocalNetworkGateways(this);
    this.virtualNetworkTaps = new operations.VirtualNetworkTaps(this);
    this.virtualWans = new operations.VirtualWans(this);
    this.vpnSites = new operations.VpnSites(this);
    this.vpnSitesConfiguration = new operations.VpnSitesConfiguration(this);
    this.virtualHubs = new operations.VirtualHubs(this);
    this.hubVirtualNetworkConnections = new operations.HubVirtualNetworkConnections(this);
    this.vpnGateways = new operations.VpnGateways(this);
    this.vpnConnections = new operations.VpnConnections(this);
    this.p2sVpnServerConfigurations = new operations.P2sVpnServerConfigurations(this);
    this.p2sVpnGateways = new operations.P2sVpnGateways(this);
  }

  /**
   * Checks whether a domain name in the cloudapp.azure.com zone is available for use.
   * @param location The location of the domain name.
   * @param domainNameLabel The domain name to be verified. It must conform to the following regular
   * expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
   * @param [options] The optional parameters
   * @returns Promise<Models.CheckDnsNameAvailabilityResponse>
   */
  checkDnsNameAvailability(location: string, domainNameLabel: string, options?: msRest.RequestOptionsBase): Promise<Models.CheckDnsNameAvailabilityResponse>;
  /**
   * @param location The location of the domain name.
   * @param domainNameLabel The domain name to be verified. It must conform to the following regular
   * expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
   * @param callback The callback
   */
  checkDnsNameAvailability(location: string, domainNameLabel: string, callback: msRest.ServiceCallback<Models.DnsNameAvailabilityResult>): void;
  /**
   * @param location The location of the domain name.
   * @param domainNameLabel The domain name to be verified. It must conform to the following regular
   * expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkDnsNameAvailability(location: string, domainNameLabel: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DnsNameAvailabilityResult>): void;
  checkDnsNameAvailability(location: string, domainNameLabel: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DnsNameAvailabilityResult>, callback?: msRest.ServiceCallback<Models.DnsNameAvailabilityResult>): Promise<Models.CheckDnsNameAvailabilityResponse> {
    return this.sendOperationRequest(
      {
        location,
        domainNameLabel,
        options
      },
      checkDnsNameAvailabilityOperationSpec,
      callback) as Promise<Models.CheckDnsNameAvailabilityResponse>;
  }

  /**
   * Gives the supported security providers for the virtual wan.
   * @param resourceGroupName The resource group name.
   * @param virtualWANName The name of the VirtualWAN for which supported security providers are
   * needed.
   * @param [options] The optional parameters
   * @returns Promise<Models.SupportedSecurityProvidersResponse>
   */
  supportedSecurityProviders(resourceGroupName: string, virtualWANName: string, options?: msRest.RequestOptionsBase): Promise<Models.SupportedSecurityProvidersResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param virtualWANName The name of the VirtualWAN for which supported security providers are
   * needed.
   * @param callback The callback
   */
  supportedSecurityProviders(resourceGroupName: string, virtualWANName: string, callback: msRest.ServiceCallback<Models.VirtualWanSecurityProviders>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param virtualWANName The name of the VirtualWAN for which supported security providers are
   * needed.
   * @param options The optional parameters
   * @param callback The callback
   */
  supportedSecurityProviders(resourceGroupName: string, virtualWANName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualWanSecurityProviders>): void;
  supportedSecurityProviders(resourceGroupName: string, virtualWANName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualWanSecurityProviders>, callback?: msRest.ServiceCallback<Models.VirtualWanSecurityProviders>): Promise<Models.SupportedSecurityProvidersResponse> {
    return this.sendOperationRequest(
      {
        resourceGroupName,
        virtualWANName,
        options
      },
      supportedSecurityProvidersOperationSpec,
      callback) as Promise<Models.SupportedSecurityProvidersResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkDnsNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/CheckDnsNameAvailability",
  urlParameters: [
    Parameters.location0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.domainNameLabel,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DnsNameAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const supportedSecurityProvidersOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualWans/{virtualWANName}/supportedSecurityProviders",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualWANName0
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualWanSecurityProviders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

export {
  NetworkManagementClient,
  NetworkManagementClientContext,
  Models as NetworkManagementModels,
  Mappers as NetworkManagementMappers
};
export * from "./operations";
