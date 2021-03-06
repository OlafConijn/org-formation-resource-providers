# Community::S3::PublicAccessBlock

## Installation using AWS CLI
``` bash
# first install the execution role
aws cloudformation create-stack \
  --template-url https://community-resource-provider-catalog.s3.amazonaws.com/community-s3-publicaccessblock-resource-role-0.2.2.yml \
  --stack-name community-s3-publicaccessblock-resource-role \
  --capabilities CAPABILITY_IAM

aws cloudformation wait stack-create-complete \
  --stack-name community-s3-publicaccessblock-resource-role

# get the value of the ExecutionRoleArn Output
aws cloudformation describe-stacks \
  --stack-name community-s3-publicaccessblock-resource-role

# register the cloudformation type
aws cloudformation register-type \
  --type-name Community::S3::PublicAccessBlock \
  --type RESOURCE \
  --schema-handler-package s3://community-resource-provider-catalog/community-s3-publicaccessblock-0.2.2.zip \
  --execution-role <role-arn-from-output>

aws cloudformation describe-type-registration --registration-token <registration-token>

aws cloudformation set-type-default-version \
  --version-id <version-id> \
  --type-name Community::S3::PublicAccessBlock \
  --type RESOURCE

```

## Installation using org-formation task
For more information on AWS Organization Formation, see: https://github.com/org-formation/org-formation-cli

``` yaml
CommunityS3PublicAccessBlockRP:
  Type: register-type
  SchemaHandlerPackage: s3://community-resource-provider-catalog/community-s3-publicaccessblock-0.2.2.zip
  ResourceType: 'Community::S3::PublicAccessBlock'
  MaxConcurrentTasks: 10
  OrganizationBinding:
    IncludeMasterAccount: true
    Account: '*'
    Region: us-east-1
```