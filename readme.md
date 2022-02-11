# setget
**setget** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://starport.com).

## Getting started

### What this project does ?

This project is simply a demo for using cosmos-sdk, in which we can set a variable string value from someone and can receive current value of the variable

### Installation 

Install `starport`:

```
curl https://get.starport.network/starport | bash
```

### Start everything

To start testing locally, we don't really need to re-configure anything

```
starport chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.com).


### Test

Can run following commands after starting everything

To set value:

```
setgetd tx setget set <value> --from alice
```

Example:

```
setgetd tx setget set LOL --from alice -y
```

Expected output:

```
code: 0
codespace: ""
data: 0A260A242F76696E6870687563746164616E672E7365746765742E7365746765742E4D7367536574
events:
- attributes:
  - index: true
    key: ZmVl
    value: ""
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: Y29zbW9zMXJnMjRnMHcwbWp1YW1ubGNzZGhoenk0YWpwcDZsdHhrcm03azJqLzc=
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: dHZsWW1EcTFHbndOR3VVTEFjcVVzQ21FbzBDOHJ6RGQzL2tnTTB2NEwvZC9QTUt4dzV6REJQbUFBMHdmMWw2WFpKYUtjekhJb0xTUXpWeEowbjM1aVE9PQ==
  type: tx
- attributes:
  - index: true
    key: YWN0aW9u
    value: c2V0
  type: message
gas_used: "40371"
gas_wanted: "200000"
height: "563"
info: ""
logs:
- events:
  - attributes:
    - key: action
      value: set
    type: message
  log: ""
  msg_index: 0
raw_log: '[{"events":[{"type":"message","attributes":[{"key":"action","value":"set"}]}]}]'
timestamp: ""
tx: null
txhash: A011715CD1FA27322D8A4EEE59D0E5B1E105A6469D36F7C3183AECB9FA39F3D9
```

To get value:

```
setgetd q setget get
```

Expected output:

```
value: LOL
```

## Learn more

- [Starport](https://starport.com)
- [Tutorials](https://docs.starport.com/guide)
- [Starport docs](https://docs.starport.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/H6wGTY8sxw)
