import { Grid, Page, LegacyCard, TextField } from "@shopify/polaris";

function App() {
  const buildAddOptions = () => {
    return (
      <Grid>
        <Grid.Cell
          columnSpan={{ xs: 6, sm: 3, md: 3, lg: 7, xl: 7 }}
          verticalAlign="middle"
        >
          <LegacyCard title="General" sectioned>
            <TextField
              label="Campaign"
              // value={value}
              // onChange={handleChange}
              autoComplete="off"
            />

            <TextField
              label="Title"
              // value={value}
              // onChange={handleChange}
              autoComplete="off"
            />

            <TextField
              label="Description"
              // value={value}
              // onChange={handleChange}
              autoComplete="off"
            />
          </LegacyCard>

          {/*  */}
          <LegacyCard title="Volume discount rule" sectioned>
            <p>View a summary of your online store’s sales.</p>
          </LegacyCard>
        </Grid.Cell>

        <Grid.Cell
          columnSpan={{ xs: 6, sm: 3, md: 3, lg: 7, xl: 7 }}
          verticalAlign="middle"
        >
          <LegacyCard title="General" sectioned>
            <TextField
              label="Campaign"
              // value={value}
              // onChange={handleChange}
              autoComplete="off"
            />

            <TextField
              label="Title"
              // value={value}
              // onChange={handleChange}
              autoComplete="off"
            />

            <TextField
              label="Description"
              // value={value}
              // onChange={handleChange}
              autoComplete="off"
            />
          </LegacyCard>

          {/*  */}
          <LegacyCard title="Volume discount rule" sectioned>
            <p>View a summary of your online store’s sales.</p>
          </LegacyCard>
        </Grid.Cell>
        <Grid.Cell
          columnSpan={{ xs: 6, sm: 3, md: 3, lg: 7, xl: 7 }}
          verticalAlign="middle"
        >
          <LegacyCard title="General" sectioned>
            <TextField
              label="Campaign"
              // value={value}
              // onChange={handleChange}
              autoComplete="off"
            />

            <TextField
              label="Title"
              // value={value}
              // onChange={handleChange}
              autoComplete="off"
            />

            <TextField
              label="Description"
              // value={value}
              // onChange={handleChange}
              autoComplete="off"
            />
          </LegacyCard>

          {/*  */}
          <LegacyCard title="Volume discount rule" sectioned>
            <p>View a summary of your online store’s sales.</p>
          </LegacyCard>
        </Grid.Cell>
      </Grid>
    );
  };

  return (
    <div style={{ width: "90%" }}>
      <Page
        backAction={{ content: "Create volume discount", url: "/" }}
        title="Create volume discount"
      >
        <Grid>
          <Grid.Cell
            columnSpan={{ xs: 6, sm: 3, md: 3, lg: 7, xl: 7 }}
            verticalAlign="middle"
          >
            <LegacyCard title="General" sectioned>
              <TextField
                label="Campaign"
                // value={value}
                // onChange={handleChange}
                autoComplete="off"
              />

              <TextField
                label="Title"
                // value={value}
                // onChange={handleChange}
                autoComplete="off"
              />

              <TextField
                label="Description"
                // value={value}
                // onChange={handleChange}
                autoComplete="off"
              />
            </LegacyCard>

            {/*  */}
            <LegacyCard title="Volume discount rule" sectioned>
              <p>View a summary of your online store’s sales.</p>
            </LegacyCard>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 5, xl: 5 }}>
            <LegacyCard title="Preview" sectioned>
              <buildAddOptions />
            </LegacyCard>
          </Grid.Cell>
        </Grid>
      </Page>
    </div>
  );
}

export default App;
