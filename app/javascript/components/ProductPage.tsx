import React, { useState } from "react";
import {
  AppProvider,
  Page,
  Layout,
  Card,
  ResourcePicker,
  List
} from "@shopify/polaris";
import {
  Product,
  SelectPayload
} from "@shopify/app-bridge/actions/ResourcePicker";

declare var ShopifyConfig: {
  apiKey: string;
  shopOrigin: string;
};

const ProductPage = () => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [showResourcePicker, setShowResourcePicker] = useState(false);

  const handleSelection = ({ selection }: SelectPayload) => {
    const selectedProducts = selection as Array<Product>;
    setProducts([...products, ...selectedProducts]);
    setShowResourcePicker(false);
  };

  return (
    <AppProvider
      apiKey={ShopifyConfig.apiKey}
      shopOrigin={ShopifyConfig.shopOrigin}
    >
      <Page
        title="Products"
        secondaryActions={[
          {
            id: "show-resource-picker",
            content: "Browse products",
            onAction: () => setShowResourcePicker(true)
          }
        ]}
      >
        <Layout>
          <Layout.Section fullWidth>
            <Card title="Products">
              <Card.Section>
                <List type="bullet">
                  {products.map(product => (
                    <List.Item key={product.id}>{product.title}</List.Item>
                  ))}
                </List>
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>

        <ResourcePicker
          resourceType="Product"
          open={showResourcePicker}
          onSelection={handleSelection}
          onCancel={() => setShowResourcePicker(false)}
        />
      </Page>
    </AppProvider>
  );
};

export default ProductPage;
