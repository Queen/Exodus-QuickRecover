# Exodus-QuickRecover

A simple script to generate an Exodus seeed phrase from seed.seco & the wallet password.

## Usage

Put your `seed.seco` & `passphrase.json` (for wallets without a password set) or just `seed.seco` in the project root.
IF your wallet is password protected, make a file called `passphrase.json` with the data formatted as such:

```json
{
    "passphrase": <password here>
}
```

`npm i`
`node index`

Mnemonic should be outputted.