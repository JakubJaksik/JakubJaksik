<div align="center">

# Jakub Jaksik

**Cryptography and low-latency systems.** Rust engineer in high-frequency trading.
Block ciphers on FPGA, a measurement study of how transactions land on Solana,
and a slow read through post-quantum lattices and zero-knowledge proofs.

![Rust](https://img.shields.io/badge/Rust-000?style=flat-square&logo=rust&logoColor=fff)
![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=fff)
![Verilog](https://img.shields.io/badge/Verilog%20%2F%20FPGA-1a1a1a?style=flat-square)
![Solana](https://img.shields.io/badge/Solana-000?style=flat-square&logo=solana&logoColor=14F195)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=fff)

### [ &nbsp;&raquo;&nbsp; View the portfolio &nbsp;&#8599;&nbsp; ](https://JakubJaksik.github.io/JakubJaksik/)

</div>

---

## Cryptography

When I want to understand a cipher I implement it, and when I can I put it on hardware.

### Implementations and hardware

| Project | What it is | Stack | Status |
|---|---|---|---|
| **[AES-XTS-256](https://github.com/JakubJaksik/AES-XTS-256)** | Full AES-256 in XTS mode on FPGA: key schedule, enc/dec datapath, the XTS tweak layer with alpha-multiplication in GF(2¹²⁸), a control FSM, and testbenches. Met timing on the Cyclone V with headroom. | Verilog, Cyclone V | ✅ complete |
| **[eddsa-verilog](https://github.com/JakubJaksik/eddsa-verilog)** | Ed25519 signatures on FPGA: twisted-Edwards curve arithmetic taken onto hardware. | Verilog, Quartus | ✅ working |
| **[BLAKE3](https://github.com/JakubJaksik/BLAKE3)** | The BLAKE3 hash from the spec: the chunk tree, parent-node compression, and extendable output. Checked against the official test vectors. | C++ | ✅ complete |
| **[PRESENT](https://github.com/JakubJaksik/PRESENT_IMPL)** | The PRESENT lightweight block cipher (ISO/IEC 29192-2): 80-bit key, 31 rounds, a 4-bit S-box and a bit permutation. | C++ | ✅ complete |
| **[Grøstl](https://github.com/JakubJaksik/Grostl)** | The Grøstl hash (a SHA-3 finalist): the P and Q permutations over GF(2⁸). My first crypto in Rust. | Rust | 🟡 WIP |

### Research (in progress)

- **Lattice-based post-quantum cryptography:** the lattice problems the next generation of crypto rests on (SIS/LWE) and the schemes built on them.
- **Zero-knowledge proofs:** proving a statement without revealing why it is true, and where it meets the chains below.

---

## Blockchain

Trading pulled me onto Solana and EVM. No strategies here, just the plumbing, instrumented.

| Project | What it is | Stack | Status |
|---|---|---|---|
| **[solana-sender-analysis](https://JakubJaksik.github.io/solana-sender-analysis/)** | A measurement study: 17 transaction senders raced head to head, 380k timed attempts, latency in Proof-of-History ticks. The finding: the *fastest* sender is not the one that wins; inclusion is a routing and peering problem. Full illustrated write-up. | Rust + Python | ✅ published |
| **[solana-test](https://github.com/JakubJaksik/solana-test)** | The toolkit behind the study, a Cargo workspace: a validator-to-location leader map, a ShredStream vs Yellowstone entry comparator, tick-trigger and fan-out benches, and an EVM tx-cutoff probe. | Rust 2024 | ✅ working |

---

<div align="center">
<sub>

Cryptology and cybersecurity grad · Rust, Verilog, C++ · occasional macro photographer

[github.com/JakubJaksik](https://github.com/JakubJaksik) &nbsp;·&nbsp; [jakubjaksik@outlook.com](mailto:jakubjaksik@outlook.com)

</sub>
</div>
