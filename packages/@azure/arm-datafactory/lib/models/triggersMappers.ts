/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

export {
  discriminators,
  TriggerListResponse,
  TriggerResource,
  SubResource,
  BaseResource,
  Trigger,
  CloudError,
  Resource,
  Factory,
  FactoryIdentity,
  FactoryRepoConfiguration,
  IntegrationRuntimeResource,
  IntegrationRuntime,
  LinkedServiceResource,
  LinkedService,
  IntegrationRuntimeReference,
  ParameterSpecification,
  DatasetResource,
  Dataset,
  LinkedServiceReference,
  DatasetFolder,
  PipelineResource,
  Activity,
  ActivityDependency,
  UserProperty,
  VariableSpecification,
  PipelineFolder,
  FactoryVSTSConfiguration,
  FactoryGitHubConfiguration,
  RerunTumblingWindowTrigger,
  RerunTriggerResource,
  TumblingWindowTrigger,
  TriggerPipelineReference,
  PipelineReference,
  RetryPolicy,
  DependencyReference,
  MultiplePipelineTrigger,
  AzureFunctionLinkedService,
  SecretBase,
  AzureDataExplorerLinkedService,
  GoogleAdWordsLinkedService,
  OracleServiceCloudLinkedService,
  DynamicsAXLinkedService,
  ResponsysLinkedService,
  AzureDatabricksLinkedService,
  AzureDataLakeAnalyticsLinkedService,
  HDInsightOnDemandLinkedService,
  ScriptAction,
  SalesforceMarketingCloudLinkedService,
  NetezzaLinkedService,
  AzureKeyVaultSecretReference,
  VerticaLinkedService,
  ZohoLinkedService,
  XeroLinkedService,
  SquareLinkedService,
  SparkLinkedService,
  ShopifyLinkedService,
  ServiceNowLinkedService,
  QuickBooksLinkedService,
  PrestoLinkedService,
  PhoenixLinkedService,
  PaypalLinkedService,
  MarketoLinkedService,
  MariaDBLinkedService,
  MagentoLinkedService,
  JiraLinkedService,
  ImpalaLinkedService,
  HubspotLinkedService,
  HiveLinkedService,
  HBaseLinkedService,
  GreenplumLinkedService,
  GoogleBigQueryLinkedService,
  EloquaLinkedService,
  DrillLinkedService,
  CouchbaseLinkedService,
  ConcurLinkedService,
  AzurePostgreSqlLinkedService,
  AmazonMWSLinkedService,
  SapHanaLinkedService,
  SapBWLinkedService,
  SftpServerLinkedService,
  FtpServerLinkedService,
  HttpLinkedService,
  AzureSearchLinkedService,
  CustomDataSourceLinkedService,
  AmazonRedshiftLinkedService,
  AmazonS3LinkedService,
  RestServiceLinkedService,
  SapOpenHubLinkedService,
  SapEccLinkedService,
  SapCloudForCustomerLinkedService,
  SalesforceLinkedService,
  Office365LinkedService,
  AzureBlobFSLinkedService,
  AzureDataLakeStoreLinkedService,
  CosmosDbMongoDbApiLinkedService,
  MongoDbV2LinkedService,
  MongoDbLinkedService,
  CassandraLinkedService,
  WebLinkedService,
  WebLinkedServiceTypeProperties,
  ODataLinkedService,
  HdfsLinkedService,
  OdbcLinkedService,
  AzureMLLinkedService,
  TeradataLinkedService,
  Db2LinkedService,
  SybaseLinkedService,
  PostgreSqlLinkedService,
  MySqlLinkedService,
  AzureMySqlLinkedService,
  OracleLinkedService,
  FileServerLinkedService,
  HDInsightLinkedService,
  DynamicsLinkedService,
  CosmosDbLinkedService,
  AzureKeyVaultLinkedService,
  AzureBatchLinkedService,
  AzureSqlDatabaseLinkedService,
  SqlServerLinkedService,
  AzureSqlDWLinkedService,
  AzureTableStorageLinkedService,
  AzureBlobStorageLinkedService,
  AzureStorageLinkedService,
  GoogleAdWordsObjectDataset,
  AzureDataExplorerTableDataset,
  OracleServiceCloudObjectDataset,
  DynamicsAXResourceDataset,
  ResponsysObjectDataset,
  SalesforceMarketingCloudObjectDataset,
  VerticaTableDataset,
  NetezzaTableDataset,
  ZohoObjectDataset,
  XeroObjectDataset,
  SquareObjectDataset,
  SparkObjectDataset,
  ShopifyObjectDataset,
  ServiceNowObjectDataset,
  QuickBooksObjectDataset,
  PrestoObjectDataset,
  PhoenixObjectDataset,
  PaypalObjectDataset,
  MarketoObjectDataset,
  MariaDBTableDataset,
  MagentoObjectDataset,
  JiraObjectDataset,
  ImpalaObjectDataset,
  HubspotObjectDataset,
  HiveObjectDataset,
  HBaseObjectDataset,
  GreenplumTableDataset,
  GoogleBigQueryObjectDataset,
  EloquaObjectDataset,
  DrillTableDataset,
  CouchbaseTableDataset,
  ConcurObjectDataset,
  AzurePostgreSqlTableDataset,
  AmazonMWSObjectDataset,
  HttpDataset,
  DatasetStorageFormat,
  DatasetCompression,
  AzureSearchIndexDataset,
  WebTableDataset,
  RestResourceDataset,
  SqlServerTableDataset,
  SapOpenHubTableDataset,
  SapEccResourceDataset,
  SapCloudForCustomerResourceDataset,
  SalesforceObjectDataset,
  RelationalTableDataset,
  AzureMySqlTableDataset,
  OracleTableDataset,
  ODataResourceDataset,
  CosmosDbMongoDbApiCollectionDataset,
  MongoDbV2CollectionDataset,
  MongoDbCollectionDataset,
  FileShareDataset,
  Office365Dataset,
  AzureBlobFSDataset,
  AzureDataLakeStoreDataset,
  DynamicsEntityDataset,
  DocumentDbCollectionDataset,
  CustomDataset,
  CassandraTableDataset,
  AzureSqlDWTableDataset,
  AzureSqlTableDataset,
  AzureTableDataset,
  AzureBlobDataset,
  AmazonS3Dataset,
  ExecutionActivity,
  ActivityPolicy,
  ControlActivity,
  SelfHostedIntegrationRuntime,
  LinkedIntegrationRuntimeType,
  ManagedIntegrationRuntime,
  IntegrationRuntimeComputeProperties,
  IntegrationRuntimeVNetProperties,
  IntegrationRuntimeSsisProperties,
  IntegrationRuntimeSsisCatalogInfo,
  SecureString,
  IntegrationRuntimeCustomSetupScriptProperties,
  SelfDependencyTumblingWindowTriggerReference,
  TriggerDependencyReference,
  TriggerReference,
  BlobEventsTrigger,
  BlobTrigger,
  ScheduleTrigger,
  ScheduleTriggerRecurrence,
  RecurrenceSchedule,
  RecurrenceScheduleOccurrence,
  WebClientCertificateAuthentication,
  WebBasicAuthentication,
  WebAnonymousAuthentication,
  DatasetZipDeflateCompression,
  DatasetDeflateCompression,
  DatasetGZipCompression,
  DatasetBZip2Compression,
  ParquetFormat,
  OrcFormat,
  AvroFormat,
  JsonFormat,
  TextFormat,
  AzureFunctionActivity,
  DatabricksSparkPythonActivity,
  DatabricksSparkJarActivity,
  DatabricksNotebookActivity,
  DataLakeAnalyticsUSQLActivity,
  AzureMLUpdateResourceActivity,
  AzureMLBatchExecutionActivity,
  AzureMLWebServiceFile,
  GetMetadataActivity,
  DatasetReference,
  WebActivity,
  WebActivityAuthentication,
  LookupActivity,
  CopySource,
  DeleteActivity,
  LogStorageSettings,
  SqlServerStoredProcedureActivity,
  StoredProcedureParameter,
  CustomActivity,
  CustomActivityReferenceObject,
  ExecuteSSISPackageActivity,
  SSISPackageLocation,
  SSISAccessCredential,
  SSISExecutionCredential,
  SSISExecutionParameter,
  SSISPropertyOverride,
  SSISLogLocation,
  HDInsightSparkActivity,
  HDInsightStreamingActivity,
  HDInsightMapReduceActivity,
  HDInsightPigActivity,
  HDInsightHiveActivity,
  CopyActivity,
  CopySink,
  CopyTranslator,
  StagingSettings,
  RedirectIncompatibleRowSettings,
  WebHookActivity,
  AppendVariableActivity,
  SetVariableActivity,
  FilterActivity,
  Expression,
  ValidationActivity,
  UntilActivity,
  WaitActivity,
  ForEachActivity,
  IfConditionActivity,
  ExecutePipelineActivity,
  LinkedIntegrationRuntimeRbacAuthorization,
  LinkedIntegrationRuntimeKeyAuthorization,
  TumblingWindowTriggerDependencyReference,
  AmazonRedshiftSource,
  RedshiftUnloadSettings,
  GoogleAdWordsSource,
  OracleServiceCloudSource,
  DynamicsAXSource,
  ResponsysSource,
  SalesforceMarketingCloudSource,
  VerticaSource,
  NetezzaSource,
  ZohoSource,
  XeroSource,
  SquareSource,
  SparkSource,
  ShopifySource,
  ServiceNowSource,
  QuickBooksSource,
  PrestoSource,
  PhoenixSource,
  PaypalSource,
  MarketoSource,
  MariaDBSource,
  MagentoSource,
  JiraSource,
  ImpalaSource,
  HubspotSource,
  HiveSource,
  HBaseSource,
  GreenplumSource,
  GoogleBigQuerySource,
  EloquaSource,
  DrillSource,
  CouchbaseSource,
  ConcurSource,
  AzurePostgreSqlSource,
  AmazonMWSSource,
  HttpSource,
  AzureBlobFSSource,
  AzureDataLakeStoreSource,
  Office365Source,
  CosmosDbMongoDbApiSource,
  MongoDbCursorMethodsProperties,
  MongoDbV2Source,
  MongoDbSource,
  CassandraSource,
  WebSource,
  OracleSource,
  AzureDataExplorerSource,
  AzureMySqlSource,
  HdfsSource,
  DistcpSettings,
  FileSystemSource,
  SqlDWSource,
  SqlSource,
  RestSource,
  SapOpenHubSource,
  SapEccSource,
  SapCloudForCustomerSource,
  SalesforceSource,
  RelationalSource,
  DynamicsSource,
  DocumentDbCollectionSource,
  BlobSource,
  AzureTableSource,
  TabularTranslator,
  CosmosDbMongoDbApiSink,
  SalesforceSink,
  AzureDataExplorerSink,
  DynamicsSink,
  OdbcSink,
  AzureSearchIndexSink,
  AzureBlobFSSink,
  AzureDataLakeStoreSink,
  OracleSink,
  SqlDWSink,
  PolybaseSettings,
  SqlSink,
  DocumentDbCollectionSink,
  FileSystemSink,
  BlobSink,
  AzureTableSink,
  AzureQueueSink,
  SapCloudForCustomerSink
} from "../models/mappers";

