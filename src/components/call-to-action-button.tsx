import { CallToActionButton } from '../bng_components/CallToActionButton';
import React from 'react';
import { Action } from '../typescript/action';
import { ExtraParametersProvider } from '../context/extra-parameters-provider';

export function CallToActionButtonComponent(callToAction: Action) {
    return (
        <ExtraParametersProvider {...callToAction.$?.title}>
            <CallToActionButton                
                url={callToAction.href}
                title={callToAction.title}
            />
        </ExtraParametersProvider>
    );
}