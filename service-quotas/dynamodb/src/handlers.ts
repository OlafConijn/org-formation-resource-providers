import { Action, BaseResource, exceptions, handlerEvent } from 'cfn-rpdk';
import { ResourceModel } from './models';
import { IAM, ServiceQuotas } from 'aws-sdk';
import { commonAws, HandlerArgs, QuotaID, UpsertQuotas } from 'aws-resource-providers-common';
import { Console } from 'console';

const quotaCodeForPropertyName: Record<string, QuotaID> = {
    tables: { QuotaCode: 'L-F98FE922', ServiceCode: 'dynamodb' },
};

class Resource extends BaseResource<ResourceModel> {

    @handlerEvent(Action.Create)
    @commonAws({ serviceName: 'ServiceQuotas', debug: true })
    public async create(action: Action, args: HandlerArgs<ResourceModel>, service: ServiceQuotas, model: ResourceModel): Promise<ResourceModel> {
        await UpsertQuotas(service, new ResourceModel(), model, quotaCodeForPropertyName, console);

        const { awsAccountId } = args.request;
        model.arn = 'arn:community:servicequotas::' + awsAccountId + ':dynamodb'; // there can only be one

        return Promise.resolve(model);
    }

    @handlerEvent(Action.Update)
    @commonAws({ serviceName: 'ServiceQuotas', debug: true })
    public async update(action: Action, args: HandlerArgs<ResourceModel>, service: ServiceQuotas, model: ResourceModel): Promise<ResourceModel> {
        await UpsertQuotas(service, args.request.previousResourceState, model, quotaCodeForPropertyName, console);
        return Promise.resolve(model);
    }

    @handlerEvent(Action.Delete)
    @commonAws({ serviceName: 'ServiceQuotas', debug: true })
    public async delete(action: Action, args: HandlerArgs<ResourceModel>, service: ServiceQuotas, model: ResourceModel): Promise<null> {
        return Promise.resolve(null);
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

export const entrypoint = resource.entrypoint;

export const testEntrypoint = resource.testEntrypoint;
