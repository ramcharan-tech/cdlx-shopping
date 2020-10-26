<template>
  <div>
    <pre>
        Events
           1.PageView
           2.Click Events
           3.Link Tracking
           4.Ecommerce

    </pre>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info"
            >Pageview</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <pre>
              {{ AllEvents.pageview.Description }}
              </pre>
              <TableDetail
                :TableData="AllEvents.pageview.TableData"
              ></TableDetail>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info"
            >Click Events</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <div>
            {{ AllEvents.ClickEvents.Description }}
          </div>
          <b-card-body>
            <b-card-text>{{ AllEvents.ClickEvents.Example }}</b-card-text>
          </b-card-body>
          <TableDetail
            :TableData="AllEvents.ClickEvents.TableData"
          ></TableDetail>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info"
            >Link Tracking</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text><pre>{{ AllEvents.LinkTracking.Description }}</pre></b-card-text>
          </b-card-body>
          <TableDetail
            :TableData="AllEvents.LinkTracking.TableData"
          ></TableDetail>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-4 variant="info"
            >Ecommerce</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
          <b>Impression</b>
          <b-card-body>
            <b-card-text
              ><pre>{{ AllEvents.Ecommerce.Impression.Example }}</pre></b-card-text
            >
          </b-card-body>
          
           <TableDetail
            :TableData="AllEvents.Ecommerce.TableData.Impression"
          ></TableDetail>

          <b> Product Data</b> <code>used for purchase ,addtocart</code>
          <b-card-body>
            <b-card-text
              ><pre>{{ AllEvents.Ecommerce.ProductData.Example }}</pre></b-card-text
            >
          </b-card-body>
          <TableDetail
            :TableData="AllEvents.Ecommerce.TableData.ProductData"
          ></TableDetail>
          <b>Promotion Data</b>
          <b-card-body>
            <b-card-text
              ><pre>{{ AllEvents.Ecommerce.PromotionData.Example }}</pre></b-card-text
            >
          </b-card-body>
          <div class="devsite-table-wrapper">
            <TableDetail
            :TableData="AllEvents.Ecommerce.TableData.PromotionData"
          ></TableDetail>
          </div>
          <b>Action Data </b>
          <b-card-body>
            <b-card-text
              ><pre>{{ AllEvents.Ecommerce.ActionData.Example }}</pre></b-card-text
            >
          </b-card-body>
          <div class="devsite-table-wrapper">
            <TableDetail
            :TableData="AllEvents.Ecommerce.TableData.ActionData"
          ></TableDetail>
          </div>
          <b>Product and Promotion actions</b> (List of actions on Ecommerce)
          <b-card-body>
            <b-card-text
              ><pre>{{ AllEvents.Ecommerce.ActionListData.Example }}</pre></b-card-text
            >
          </b-card-body>
          <div class="devsite-table-wrapper">
           <TableDetail
            :TableData="AllEvents.Ecommerce.TableData.ActionListData"
          ></TableDetail>
          </div>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>
<script>
import TableDetail from "../components/Table/TableDetail";
export default {
  components: {
    TableDetail,
  },
  data() {
    return {
      AllEvents: {
        pageview: {
          Description: `To track the pageviews by the user in the advertiser site ,need to push the pageview key into the Cdlx.q object.
            Format for pageview is:

            1.Cdlx.q.push( [ ‘trackpageview’,
            {
            title: "shopping" ,
            location:  "https://shoppingsite.com/shop",
            path: "/shop",
            description :"site for shopping"
            } ] )

            2.Cdlx.trackpageview(shopping ,https://shoppingsite.com/shop,/shop,site for shopping)

            Users can choose any of the choices listed above to push the data `,
          TableData: {
            th: ["Field Name", "Value Type", "Required", "Description"],
            tr: [
              {
                td: [
                  `<a href="/analytics/devguides/collection/analyticsjs/field-reference#title"
                          ><code translate="no" dir="ltr">title</code></a
                        >`,
                  "text",
                  "no",
                  "The title of the page (e.g. homepage)",
                ],
              },
              {
                td: ["location", "text", "no", "url of the page"],
              },
              {
                td: [
                  "page",
                  "text",
                  "no",
                  ` The path portion of a URL. This value should start with
                        a slash (<code translate="no" dir="ltr">/<wbr /></code>)
                        character.`,
                ],
              },
            ],
          },
        },
        ClickEvents: {
          Example: ` Cdlx.q.push( [ 'push_event’,
            {
            type:'click',
            eventCategory: "video" ,
            eventAction:  "play",
            eventLabel: "promo",
            eventValue :"42"
            } ] )  `,
          Description: `Events are user interactions with content that can be measured
            independently from a web page or a screen load. Downloads, mobile ad
            clicks, gadgets, Flash elements, AJAX embedded elements, and video
            plays are all examples of actions you might want to measure as
            Events.`,
          TableData: {
            th: ["Field Name", "Value Type", "Required", "Description"],
            tr: [
              {
                td: [
                  `type`,
                  "text",
                  "<strong>yes</strong>",
                  `Specify the event type`,
                ],
              },
              {
                td: [
                  `eventCategory`,
                  "text",
                  "<strong>yes</strong>",
                  `Typically the object that was interacted with (e.g.
                    <code translate="no" dir="ltr">'Video'</code>)`,
                ],
              },
              {
                td: [
                  "eventAction",
                  "text",
                  "<strong>yes</strong>",
                  ` The type of interaction (e.g.
                    <code translate="no" dir="ltr">'play'</code>)`,
                ],
              },
              {
                td: [
                  "eventLabel",
                  "text",
                  "no",
                  `Useful for categorizing events (e.g.
                    <code translate="no" dir="ltr">'Fall Campaign'</code>)`,
                ],
              },
              {
                td: [
                  "eventValue",
                  "integer",
                  "no",
                  ` A numeric value associated with the event (e.g.
                    <code translate="no" dir="ltr">42</code>)`,
                ],
              },
            ],
          },
        },
        LinkTracking: {
          Description: ` similar to click events,link tracking can be achieved in the same way

           Eg:Cdlx.q.push( [ ,
            {
            type:‘tracklinks’,
            href: "/shopping" ,
            text:  "shop",
            id: "abc",
            view :"10"
            } ] )    `,
          TableData: {
            th: ["Field Name", "Value Type", "Required", "Description"],
            tr: [
              {
                td: [
                  `type`,
                  "text",
                  "<strong>yes</strong>",
                  `Specify the event type`,
                ],
              },
              {
                td: [
                  "href",
                  "text",
                  "<strong>yes</strong>",
                  `href of that link element`,
                ],
              },
              {
                td: ["text", "text", "no", `text on that link element`],
              },
              {
                td: ["id", "integer", "no", `id on that link element`],
              },
              {
                td: [
                  "view",
                  "integer",
                  "no",
                  ` A numeric value associated with the event (e.g.
                    <code translate="no" dir="ltr">10</code>)`,
                ],
              },
            ],
          },
        },
        Ecommerce: {
          Types: `impression data
product data
action data
action types     `,
          Impression: {
            Example: ` Cdlx.q.push(['push_event', {
  type: 'ec:addImpression'
  id: 'P12345',                  
  name: 'Android Warhol T-Shirt', 
  category: 'Apparel/T-Shirts',   
  brand: 'Google', 
  variant: 'Black',
  list: 'Search Results',
  position: 1,
  dimension1: 'Member'
}]);`,
          },
          ProductData: {
            Example: ` Cdlx.q.push(['push_event', {
  type: 'ec:addProduct',
  id: 'P12345',               
  name: 'Android Warhol T-Shirt',
  category: 'Apparel',            
  brand: 'Google',       
  variant: 'Black',  
  position: 1, 
  dimension1: 'Member'
}]);`,
          },
          PromotionData: {
            Example: ` Cdlx.q.push(['push_event', {
  type: 'ec:addPromo',
  action:'purchase',
  id: 'PROMO_1234',
  name: 'Summer Sale',
  creative: 'summer_banner2',
  position: 'banner_slot1'
}]);`,
          },
          ActionData: {
           Example: ` Cdlx.q.push(['push_event', {
  type: 'ec:setAction',
  action:'purchase',
  id: 'T12345',  
  affiliation: 'Google Store - Online',
  revenue: '37.39',   
  tax: '2.85',  
  shipping: '5.34',
  coupon: 'SUMMER2013'
}]);`
          },
          ActionListData: {
            Example: ``,
          },
          TableData: {
            Impression: {
              th: ["Key", "Value Type", "Required", "Description"],
              tr: [
                {
                  td: [
                    `id`,
                    "text",
                    "<strong>yes</strong>",
                    `<p>The product ID or SKU (e.g. P67890).</p>
                    <p>
                      <strong
                        >* One of <code translate="no" dir="ltr">id</code> or
                        <code translate="no" dir="ltr">name</code> must be
                        set.</strong
                      >
                    </p>`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">name</code>`,
                    "text",
                    "<strong>yes</strong>",
                    `<p>The name of the product (e.g. Android T-Shirt).</p>
                    <p>
                      <strong
                        >* One of <code translate="no" dir="ltr">id</code> or
                        <code translate="no" dir="ltr">name</code> must be
                        set.</strong
                      >
                    </p>`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">list</code>`,
                    "text",
                    "no",
                    `The list or collection to which the product belongs (e.g.
                    Search Results)`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">brand</code>`,
                    "text",
                    "no",
                    `The brand associated with the product (e.g. Google).`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">category</code>`,
                    "text",
                    "no",
                    `The category to which the product belongs (e.g. Apparel).
                    Use
                    <code translate="no" dir="ltr">/<wbr /></code> as a
                    delimiter to specify up to 5-levels of hierarchy (e.g.
                    Apparel/Men/T-Shirts).`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">variant</code>`,
                    "text",
                    "no",
                    `The variant of the product (e.g. Black).`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">position</code>`,
                    "integer",
                    "no",
                    `The product's position in a list or collection (e.g. 2).`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">price</code>`,
                    "number",
                    "no",
                    `The price of a product (e.g. 29.20).`,
                  ],
                },
              ],
            },
            ProductData: {
              th: ["Key", "Value Type", "Required", "Description"],
              tr: [
                {
                  td: [
                    `id`,
                    "text",
                    "<strong>yes</strong>",
                    `<p>The product ID or SKU (e.g. P67890).</p>
                    <p>
                      <strong
                        >* One of <code translate="no" dir="ltr">id</code> or
                        <code translate="no" dir="ltr">name</code> must be
                        set.</strong
                      >
                    </p>`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">name</code>`,
                    "text",
                    "<strong>yes</strong>",
                    `<p>The name of the product (e.g. Android T-Shirt).</p>
                    <p>
                      <strong
                        >* One of <code translate="no" dir="ltr">id</code> or
                        <code translate="no" dir="ltr">name</code> must be
                        set.</strong
                      >
                    </p>`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">brand</code>`,
                    "text",
                    "no",
                    `The brand associated with the product (e.g. Google).`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">category</code>`,
                    "text",
                    "no",
                    `The category to which the product belongs (e.g. Apparel).
                    Use
                    <code translate="no" dir="ltr">/<wbr /></code> as a
                    delimiter to specify up to 5-levels of hierarchy (e.g.
                    Apparel/Men/T-Shirts).`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">variant</code>`,
                    "text",
                    "no",
                    `The variant of the product (e.g. Black).`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">price</code>`,
                    "number",
                    "no",
                    `The price of a product (e.g. 29.20).`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">Quantity</code>`,
                    "integer",
                    "no",
                    `The quantity of a product (e.g. 2)`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">coupon</code>`,
                    "text",
                    "no",
                    `The coupon code associated with a product (e.g.
                    SUMMER_SALE13).`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">position</code>`,
                    "integer",
                    "no",
                    `The product's position in a list or collection (e.g. 2).`,
                  ],
                },
              ],
            },
          
           PromotionData: {
              th: ["Key", "Value Type", "Required", "Description"],
              tr: [
                {
                  td: [
                    `id`,
                    "text",
                    "<strong>yes</strong>",
                    `<p>The promotion ID (e.g. PROMO_1234).</p>
                    <p>
                      <strong
                        >* One of <code translate="no" dir="ltr">id</code> or
                        <code translate="no" dir="ltr">name</code> must be
                        set.</strong
                      >
                    </p>`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">name</code>`,
                    "text",
                    "<strong>yes</strong>",
                    `<p>The name of the promotion (e.g. Summer Sale).</p>
                    <p>
                      <strong
                        >* One of <code translate="no" dir="ltr">id</code> or
                        <code translate="no" dir="ltr">name</code> must be
                        set.</strong
                      >
                    </p>`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">creative</code>`,
                    "text",
                    "no",
                    `The creative associated with the promotion (e.g.
                    summer_banner2).`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">position</code>`,
                    "text",
                    "no",
                    `The position of the creative (e.g. banner_slot_1).`,
                  ],
                }
              ],
            },
          
           ActionData: {
              th: ["Key", "Value Type", "Required", "Description"],
              tr: [
                 {
                  td: [
                    `action`,
                    "text",
                    "<strong>yes</strong>",
                    `<p>purchase</p>
                    <p>
                     *Required. the list of action types accepted are in the Actiontype section
                    </p>`,
                  ],
                },
                {
                  td: [
                    `id`,
                    "text",
                    "<strong>yes</strong>",
                    `<p>The transaction ID (e.g. T1234).</p>
                    <p>
                      * Required if the action type is
                      <code translate="no" dir="ltr">purchase</code> or
                      <code translate="no" dir="ltr">refund</code>
                    </p>`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">affiliation</code>`,
                    "text",
                    "No",
                    `The store or affiliation from which this transaction
                    occurred (e.g. Google Store).`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">revenue</code>`,
                    "number",
                    "no",
                    `<p>
                      Specifies the total revenue or grand total associated with
                      the transaction (e.g. 11.99). This value may include
                      shipping, tax costs, or other adjustments to total revenue
                      that you want to include as part of your revenue
                      calculations.
                    </p>

                    <aside class="note">
                      <b>Note:</b> If revenue is not set, its value will be
                      automatically calculated using the product quantity and
                      price fields of all products in the same hit.
                    </aside>`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">tax</code>`,
                    "number",
                    "no",
                    `The total tax associated with the transaction.`,
                  ],
                },
                {
                  td: [
                    `shipping`,
                    "number",
                    "No",
                    `The shipping cost associated with the transaction.`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">coupon</code>`,
                    "text",
                    "No",
                    `The transaction coupon redeemed with the transaction.`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">list</code>`,
                    "text",
                    "no",
                    ` The list that the associated products belong to. Optional.`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">step</code>`,
                    "integer",
                    "no",
                    `A number representing a step in the checkout process.
                    Optional on \`checkout\` actions.`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">option</code>`,
                    "text",
                    "no",
                    `Additional field for
                    <code translate="no" dir="ltr">checkout</code> and
                    checkout_option actions that can describe option information
                    on the checkout page, like selected payment method.`,
                  ],
                },
              ],
            },
         
           ActionListData: {
              th: ["Action", "Description"],
              tr: [
                {
                  td: [
                    `click`,
                    ` A click on a product or product link for one or more
                    products.`,
                  ],
                },
                {
                  td: [
                    `detail`,
                    `A view of product details.`,
                  ],
                },
                {
                  td: [
                    `add`,
                    `Adding one or more products to a shopping cart.`,
                  ],
                },
                {
                  td: [
                    `remove`,
                    `Remove one or more products from a shopping cart.`,
                  ],
                },
                {
                  td: [
                    `checkout`,
                    `Initiating the checkout process for one or more products`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">checkout_<wbr />option</code>`,
                    `Sending the option value for a given checkout step.`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">purchase</code>`,
                    `The sale of one or more products.`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">refund</code>`,
                    `The refund of one or more products.`,
                  ],
                },
                {
                  td: [
                    `<code translate="no" dir="ltr">promo_<wbr />click</code>`,
                    `A click on an internal promotion.`,
                  ],
                },
              ],
            },
          },
        },
      },
    };
  },
};
</script>
<style scoped>
.devsite-content {
  --devsite-search-term-color: #5f6368;
  --devsite-search-term-weight: 400;
}
pre {
  font-family: Arial, Helvetica, sans-serif;
}
table,
th,
td {
  border: 1px solid black;
  margin: 30px;
}
</style>
