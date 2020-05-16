/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HtmlAutocomplete {
        /**
          * The id field
         */
        "idField": string;
        /**
          * The label field
         */
        "labelField": string;
        /**
          * The position determines where and how the label behaves.
         */
        "labelPosition"?: "fixed" | "stacked" | "floating";
        /**
          * The mode of the input
         */
        "mode": "material" | "bootstrap";
        /**
          * The placeholder
         */
        "placeholder": string;
        /**
          * ReadOnly attribute
         */
        "readonly": boolean;
        /**
          * Sets focus on the specified `ion-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * Suggestions
         */
        "suggestions": any[];
        /**
          * The value of the input
         */
        "value": any;
    }
}
declare global {
    interface HTMLHtmlAutocompleteElement extends Components.HtmlAutocomplete, HTMLStencilElement {
    }
    var HTMLHtmlAutocompleteElement: {
        prototype: HTMLHtmlAutocompleteElement;
        new (): HTMLHtmlAutocompleteElement;
    };
    interface HTMLElementTagNameMap {
        "html-autocomplete": HTMLHtmlAutocompleteElement;
    }
}
declare namespace LocalJSX {
    interface HtmlAutocomplete {
        /**
          * The id field
         */
        "idField"?: string;
        /**
          * The label field
         */
        "labelField"?: string;
        /**
          * The position determines where and how the label behaves.
         */
        "labelPosition"?: "fixed" | "stacked" | "floating";
        /**
          * The mode of the input
         */
        "mode"?: "material" | "bootstrap";
        "onItemSelected"?: (event: CustomEvent<any>) => void;
        /**
          * The placeholder
         */
        "placeholder"?: string;
        /**
          * ReadOnly attribute
         */
        "readonly"?: boolean;
        /**
          * Suggestions
         */
        "suggestions"?: any[];
        /**
          * The value of the input
         */
        "value"?: any;
    }
    interface IntrinsicElements {
        "html-autocomplete": HtmlAutocomplete;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "html-autocomplete": LocalJSX.HtmlAutocomplete & JSXBase.HTMLAttributes<HTMLHtmlAutocompleteElement>;
        }
    }
}