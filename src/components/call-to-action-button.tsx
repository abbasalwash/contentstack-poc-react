import { CallToActionButtonComponent } from '../bng_components/CallToActionButtonComponent';
import React from 'react';
import { Action } from '../typescript/action';
import { ExtraParametersProvider } from '../context/extra-parameters-provider';

export function CallToActionButton(callToAction: Action) {
    return (
        <ExtraParametersProvider {...callToAction.$?.title}>
            <CallToActionButtonComponent                
                url={callToAction.href}
                title={callToAction.title}
            />
        </ExtraParametersProvider>
    );
}