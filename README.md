<div align="center">

# Jakub Jaksik

**Blockchain & low-latency systems.** Blockchain engineer in high-frequency trading, working across
Solana and EVM in TypeScript and Rust. Cryptography is where I trained and where my research goes now:
post-quantum lattices and zero-knowledge proofs. Part engineer, part researcher.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff)
![Rust](https://img.shields.io/badge/Rust-000?style=flat-square&logo=rust&logoColor=fff)
![Solana](https://img.shields.io/badge/Solana-000?style=flat-square&logo=solana&logoColor=14F195)
![EVM](https://img.shields.io/badge/EVM-3C3C3D?style=flat-square&logo=ethereum&logoColor=fff)
![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=fff)
![Verilog](https://img.shields.io/badge/Verilog%20%2F%20FPGA-1a1a1a?style=flat-square)

### [ &nbsp;&raquo;&nbsp; View the portfolio &nbsp;&#8599;&nbsp; ](https://JakubJaksik.github.io/JakubJaksik/)

</div>

---

## Blockchain

The day job, and the part I would do for fun anyway: trading systems on Solana and EVM, where a few
milliseconds and a routing decision decide whether a transaction lands. Solana and EVM interest me equally.

| Project | What it is | Stack | Status |
|---|---|---|---|
| **[solana-sender-analysis](https://JakubJaksik.github.io/solana-sender-analysis/)** | A measurement study: 17 transaction senders raced head to head, 380k timed attempts, latency in Proof-of-History ticks. The finding: the *fastest* sender is not the one that wins; inclusion is a routing and peering problem. Has its own [illustrated write-up](https://JakubJaksik.github.io/solana-sender-analysis/). | Rust + Python | ✅ published |

---

## Cryptography

Where I trained and my long game. Research is moving toward post-quantum and zero-knowledge; below that,
the implementations I built along the way.

### Current research

- **Post-quantum lattices:** the lattice problems the next generation of public-key crypto rests on (SIS, LWE), the reductions behind them, and the schemes built on top. *(repo soon)*
- **Zero-knowledge proofs:** proving a statement while revealing nothing else, and the succinct proofs that let a blockchain verify computation it never had to run. *(repo soon)*

### Implementations *(studies & hobby)*

| Project | What it is | Stack | Status |
|---|---|---|---|
| **[AES-XTS-256](https://github.com/JakubJaksik/AES-XTS-256)** | Full AES-256 in XTS mode on FPGA: key schedule, enc/dec datapath, the tweak layer with alpha-multiplication in GF(2¹²⁸), control FSM, testbenches. Met timing on the Cyclone V with headroom. The one from this list I am still proud of. | Verilog, Cyclone V | ✅ complete |
| **[BLAKE3](https://github.com/JakubJaksik/BLAKE3)** | The BLAKE3 hash from the spec: chunk tree, parent-node compression, extendable output. Checked against the official test vectors. | C++ | ✅ complete |
| **[PRESENT](https://github.com/JakubJaksik/PRESENT_IMPL)** | The PRESENT lightweight block cipher (ISO/IEC 29192-2): 80-bit key, 31 rounds, a 4-bit S-box and a bit permutation. | C++ | ✅ complete |
| **[Grøstl](https://github.com/JakubJaksik/Grostl)** | The Grøstl hash (a SHA-3 finalist), P and Q permutations over GF(2⁸). Notable mostly as my first crypto in Rust. | Rust | ⏸️ abandoned |
| **[eddsa-verilog](https://github.com/JakubJaksik/eddsa-verilog)** | Ed25519 signatures toward FPGA (Cyclone V). A thread I would like to pick back up. | Verilog | ⏸️ on hold |

---

<div align="center">
<sub>

Cryptology grad · engineer & researcher · occasional macro photographer

[github.com/JakubJaksik](https://github.com/JakubJaksik) &nbsp;·&nbsp; [jakubjaksik@outlook.com](mailto:jakubjaksik@outlook.com)

</sub>
</div>
