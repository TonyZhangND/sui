// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { BCS } from '@mysten/bcs';
import { bcs } from '@mysten/sui.js/bcs';

bcs.registerStructType('AddressParams', {
	iss: BCS.STRING,
	aud: BCS.STRING,
});

bcs.registerStructType('ZkClaim', {
	name: BCS.STRING,
	value_base64: BCS.STRING,
	index_mod_4: BCS.U8,
});

bcs.registerStructType('ZkSignature', {
	inputs: {
		proof_points: {
			pi_a: [BCS.VECTOR, BCS.STRING],
			pi_b: [BCS.VECTOR, [BCS.VECTOR, BCS.STRING]],
			pi_c: [BCS.VECTOR, BCS.STRING],
		},
		address_seed: BCS.STRING,
		claims: [BCS.VECTOR, 'ZkClaim'],
		header_base64: BCS.STRING,
	},
	max_epoch: BCS.U64,
	user_signature: [BCS.VECTOR, BCS.U8],
});

export { bcs } from '@mysten/sui.js/bcs';
