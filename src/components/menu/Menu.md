Menu example:

```js
  const { Logo, Item, DropdownItem } = Menu;

  const dropdownItems = [
    { title: 'Project X', key: 'sub1' },
    { title: 'New project', key: 'sub2' },
    { title: 'Huge project', key: 'sub3' },
  ];

  <Menu theme="dark">
    <Logo> Company Logo </Logo>
    <Item> Home </Item>
    <DropdownItem subItems={dropdownItems}> Portfolio </DropdownItem>
    <Item> Blog </Item>
    <Item> Contacts </Item>
  </Menu>
```

### Menu.Item
*Item component should be used inside Menu component only*

#### Props:

| Prop name       | Type           | Default       | Description                                       |
| :------------- | :------------- | :------------ | :------------------------------------------------- |
| <span class="rsg--name-37">`textColor`</span> | <span class="rsg--type-39">`string`</span> | #000 | <p class="rsg--para-40">Defines the text color</p> |

### Menu.DropdownItem
*DropdownItem component should be used inside Menu component only*

#### Props:

| Prop name       | Type           | Default       | Description                                        |
| :------------- | :------------- | :------------ | :------------------------------------------------- |
| <span class="rsg--name-37">`subItems`</span>      | <span class="rsg--type-39">`array`</span>          | none         | <p class="rsg--para-40">List of dropdown items.</p>   |

#### Dropdown Item

*Dropdown Item should use the follow structure:*

```js static
{
  title: 'Submenu Title',
  key: 'Submenu Key',
}
```

### Menu.Logo
*Logo component should be used inside Menu component only*

#### Props:

| Prop name       | Type           | Default       | Description                                        |
| :------------- | :------------- | :------------ | :------------------------------------------------- |
| <span class="rsg--name-37">`textColor`</span>      | <span class="rsg--type-39">`string`</span>          | #000         | <p class="rsg--para-40">Defines the text color</p>   |

---