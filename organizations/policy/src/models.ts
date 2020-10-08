// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from 'cfn-rpdk';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Community::Organizations::Policy';

    @Exclude()
    protected readonly IDENTIFIER_KEY_RESOURCEID: string = '/properties/ResourceId';
    @Exclude()
    protected readonly IDENTIFIER_KEY_TARGETID: string = '/properties/TargetId';

    @Expose({ name: 'Content' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'content', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    content?: Optional<string>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'PolicyType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'policyType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    policyType?: Optional<string>;
    @Expose({ name: 'TargetId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'targetId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    targetId?: Optional<string>;
    @Expose({ name: 'ResourceId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'resourceId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    resourceId?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.resourceId != null) {
            identifier[this.IDENTIFIER_KEY_RESOURCEID] = this.resourceId;
        }

        if (this.targetId != null) {
            identifier[this.IDENTIFIER_KEY_TARGETID] = this.targetId;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 2 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

