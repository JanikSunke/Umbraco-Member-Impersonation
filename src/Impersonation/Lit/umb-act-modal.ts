import { customElement, state } from "lit/decorators.js";
import { UUIModalElement } from "@umbraco-ui/uui";
import { css, html } from "lit";
import { MemberOrderByModel, UserAuthToken } from "./types";
import { ImpersonationService } from "../Client/src/impersonation-api";
import { DirectionModel, GetFilterMemberData, MemberItemResponseModel, MemberService } from "../Client/src/management-api";

@customElement("umb-act-modal")
export class UmbActModal extends UUIModalElement {
  static styles = [
    css`
      :host uui-dialog {
        height: max(600px, 80dvh);
        width: min(610px, 100vw);
        max-height: 100dvh;
      }

      :host .hidden {
        display: none;
      }

      :host uui-icon-registry-essential {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        height: 100%;
      }

      :host uui-dialog > div {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      :host uui-dialog uui-input {
        width: 100%;
        height: 48px;
        border: none;
        font-size: var(--uui-type-default-size);
      }

      .search-providers {
        display: flex;
        flex-wrap: wrap;
        gap: var(--uui-size-space-2);
        padding: 0 var(--uui-size-space-5);
        padding-bottom: var(--uui-size-space-2);
      }

      .search-provider {
        padding: var(--uui-size-space-3) var(--uui-size-space-4);
        background: var(--uui-color-surface-alt);
        line-height: 1;
        white-space: nowrap;
        border-radius: var(--uui-border-radius);
        color: var(--uui-color-interactive);
        cursor: pointer;
        border: 2px solid transparent;
      }

      .search-provider.active {
        background: var(--uui-color-focus);
        color: var(--uui-color-selected-contrast);
        border-color: transparent;
      }

      :host uui-dialog uui-scroll-container {
        flex: 1;
      }

      :host uui-dialog > div > div:last-child {
        display: flex;
        justify-content: end;
        padding: 0 var(--uui-size-space-5);
        padding-bottom: var(--uui-size-space-2);
      }
    `,
  ];

  @state()
  filters: GetFilterMemberData["query"] = {
    memberTypeId: null,
    memberGroupName: null,
    isApproved: true,
    isLockedOut: false,
    orderBy: MemberOrderByModel.NAME,
    orderDirection: DirectionModel.ASCENDING,
    filter: "",
    skip: 0,
    take: 20,
  };

  items: MemberItemResponseModel[] = [];

  latestItems: MemberItemResponseModel[] = [];

  userAuth: UserAuthToken;

  private inputTimeout?: number;

  constructor() {
    super();
    this.getMemberItems = this.getMemberItems.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.userAuth = JSON.parse(localStorage.getItem("umb:userAuthTokenResponse"));
  }

  render() {
    return html`
      <uui-modal-container>
        <uui-modal-dialog>
          <uui-dialog>
            <div>
              <div>
                <uui-input type="search" pristine="" label="Label" placeholder="Type to search..." .onInput="${this.onInputChange}">
                  <uui-icon-registry-essential class="umb-impersonation-search-icon" slot="prepend">
                    <uui-icon name="search" />
                  </uui-icon-registry-essential>
                </uui-input>
              </div>
              <div class="search-providers">
                <button
                  @click="${() => {
                    this.filters.isApproved = !this.filters.isApproved;
                    this.requestUpdate("filters");
                  }}"
                  class="search-provider ${this.filters.isApproved ? "active" : ""}"
                >
                  Is Approved
                </button>
                <button
                  @click="${() => {
                    this.filters.isLockedOut = !this.filters.isLockedOut;
                    this.requestUpdate("filters");
                  }}"
                  class="search-provider ${this.filters.isLockedOut ? "active" : ""}"
                >
                  Is Locked Out
                </button>
                <uui-select
                  @change=${(event: { target: HTMLSelectElement }) => {
                    this.filters.take = parseInt(event.target.value);
                    this.requestUpdate("filters");
                  }}
                  label="Select Take"
                  .options=${[
                    { name: this.filters.take === 20 ? "Take " + 20 : 20, value: 20, selected: this.filters.take === 20 },
                    { name: this.filters.take === 50 ? "Take " + 50 : 50, value: 50, selected: this.filters.take === 50 },
                    {
                      name: this.filters.take === 100 ? "Take " + 100 : 100,
                      value: 100,
                      selected: this.filters.take === 100,
                    },
                    {
                      name: this.filters.take === 200 ? "Take " + 200 : 200,
                      value: 200,
                      selected: this.filters.take === 200,
                    },
                  ]}
                ></uui-select>
                <uui-select
                  @change=${(event: { target: HTMLSelectElement }) => {
                    this.filters.orderBy = event.target.value;
                    this.requestUpdate("filters");
                  }}
                  label="Select Order By"
                  .options=${[
                    {
                      name: this.filters.orderBy === MemberOrderByModel.EMAIL ? "Order By " + MemberOrderByModel.EMAIL : MemberOrderByModel.EMAIL,
                      value: MemberOrderByModel.EMAIL,
                      selected: this.filters.orderBy === MemberOrderByModel.EMAIL,
                    },
                    {
                      name: this.filters.orderBy === MemberOrderByModel.NAME ? "Order By " + MemberOrderByModel.NAME : MemberOrderByModel.NAME,
                      value: MemberOrderByModel.NAME,
                      selected: this.filters.orderBy === MemberOrderByModel.NAME,
                    },
                    {
                      name: this.filters.orderBy === MemberOrderByModel.USERNAME ? "Order By " + MemberOrderByModel.USERNAME : MemberOrderByModel.USERNAME,
                      value: MemberOrderByModel.USERNAME,
                      selected: this.filters.orderBy === MemberOrderByModel.USERNAME,
                    },
                  ]}
                ></uui-select>
              </div>
              <uui-scroll-container>
                ${this.items.map(
                  (item) => html` <umb-act-member-item-actions .item=${item}>
                    <umb-act-search-result-item .item="${item}" />
                  </umb-act-member-item-actions>`
                )}
              </uui-scroll-container>
              <div>
                <uui-button @click="${this.stopImpersonating}" class="umb-act-logout" label="impersonate" look="primary" color="danger"> Stop impersonating </uui-button>
              </div>
            </div>
          </uui-dialog>
        </uui-modal-dialog>
      </uui-modal-container>
    `;
  }

  async stopImpersonating() {
    await ImpersonationService.stopImpersonation({
      headers: {
        Authorization: "Bearer " + this.userAuth.access_token,
      },
    }).then(({ response }) => {
      if (response.ok) {
        window.location.reload();
      }
    });
  }

  async getMemberItems() {
    const { response, data } = await MemberService.getFilterMember({
      query: this.filters,
      headers: {
        Authorization: "Bearer " + this.userAuth.access_token,
      },
    });

    if (!response.ok) {
      console.error("There was a problem with the fetch operation:", await response.text());
    } else {
      this.items = data.items;
      this.requestUpdate("items");
    }
  }

  onInputChange(event: InputEvent) {
    clearTimeout(this.inputTimeout);
    let value = "";
    const target = event.target as HTMLInputElement | null;
    if (target && typeof target.value === "string") {
      value = target.value;
    } else if (event.composedPath) {
      const pathValue = (event.composedPath()[0] as any).value;
      if (typeof pathValue === "string") {
        value = pathValue;
      }
    }
    this.inputTimeout = window.setTimeout(() => {
      this.filters.filter = value;
      this.requestUpdate("filters");
    }, 200);
  }

  protected updated(changedProps: Map<string, unknown>) {
    if (changedProps.has("filters")) {
      this.getMemberItems(); // triggers when filters object reference changes
    }
  }
}
