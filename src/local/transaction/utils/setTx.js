import { ALG, CHAIN_ID } from 'config';

const defaultOptions = {
  alg: ALG,
  chain_id: CHAIN_ID,
  from: null,
  nonce: 0,
  payload: undefined,
  to: null,
  type: null,
  value: '0',
};

const setTx = (options) => {
  const opts = Object.assign({}, defaultOptions, options);
  const tx = {
    alg: opts.alg,
    chain_id: opts.chain_id,
    from: opts.from,
    nonce: opts.nonce,
    data: {
      payload: JSON.stringify(opts.payload),
      type: opts.type,
    },
    timestamp: opts.timestamp || Math.floor(new Date().getTime()),
    to: opts.to,
    value: opts.value,
  };
  return JSON.parse(JSON.stringify(tx));
};

export default setTx;
