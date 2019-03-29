Form example:

```jsx
import { Button } from 'mcs-ui-kit';

const { Input } = Form;

const handleSubmit = e => console.log(e);

<Form onSubmit={handleSubmit}>
  <Input type="text" name="login" defaultValue="John" />
  <Input type="text" name="password" defaultValue="John" />
  <Button type="primary" htmlType="submit">Submit</Button>
</Form>
```

### Form.Input
*Input component should be used inside Form component only*

#### Props:

| Prop name       | Type           | Default       | Description                                       |
| :------------- | :------------- | :------------ | :------------------------------------------------- |
| <span class="rsg--name-37">`type`</span> | <span class="rsg--type-39">`string`</span> | none | <p class="rsg--para-40">Html type of input</p> |
| <span class="rsg--name-37">`name`</span> | <span class="rsg--type-39">`string`</span> | none | <p class="rsg--para-40">You must provide this prop due to proper storing value inside Form component state</p> |
| <span class="rsg--name-37">`defaultValue`</span> | <span class="rsg--type-39">`string`</span> | none | <p class="rsg--para-40">Default Value of input</p> |

---