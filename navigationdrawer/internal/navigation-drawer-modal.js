/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { requestUpdateOnAriaChange } from '../../internal/aria/delegate.js';
/**
 *
 * @fires navigation-drawer-changed {CustomEvent<{opened: boolean}>}
 * Dispatched whenever the drawer opens or closes --bubbles --composed
 */
export class NavigationDrawerModal extends LitElement {
    static properties = {
        opened: { type: Boolean },
        pivot: { type: String },
    };
    constructor() {
        super(...arguments);
        this.opened = false;
        this.pivot = 'end';
    }
    render() {
        const ariaExpanded = this.opened ? 'true' : 'false';
        const ariaHidden = !this.opened ? 'true' : 'false';
        // Needed for closure conformance
        const { ariaLabel, ariaModal } = this;
        return html`
      <div
        class="md3-navigation-drawer-modal__scrim ${this.getScrimClasses()}"
        @click="${this.handleScrimClick}">
      </div>
      <div
        aria-expanded=${ariaExpanded}
        aria-hidden=${ariaHidden}
        aria-label=${ariaLabel || nothing}
        aria-modal=${ariaModal || nothing}
        class="md3-navigation-drawer-modal ${this.getRenderClasses()}"
        @keydown="${this.handleKeyDown}"
        role="dialog"
        ><div class="md3-elevation-overlay"></div>
        <div class="md3-navigation-drawer-modal__slot-content">
          <slot></slot>
        </div>
      </div>
    `;
    }
    getScrimClasses() {
        return classMap({
            'md3-navigation-drawer-modal--scrim-visible': this.opened,
        });
    }
    getRenderClasses() {
        return classMap({
            'md3-navigation-drawer-modal--opened': this.opened,
            'md3-navigation-drawer-modal--pivot-at-start': this.pivot === 'start',
        });
    }
    updated(changedProperties) {
        if (changedProperties.has('opened')) {
            setTimeout(() => {
                this.dispatchEvent(new CustomEvent('navigation-drawer-changed', {
                    detail: { opened: this.opened },
                    bubbles: true,
                    composed: true,
                }));
            }, 250);
        }
    }
    handleKeyDown(event) {
        if (event.code === 'Escape') {
            this.opened = false;
        }
    }
    handleScrimClick() {
        this.opened = !this.opened;
    }
}
(() => {
    requestUpdateOnAriaChange(NavigationDrawerModal);
})();
