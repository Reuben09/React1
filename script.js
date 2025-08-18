const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSodd_60JGREZeOt9jrO8CFOlp2dgYLz3z_voZd9wr_n5JgapU6qtRsOZGKIZ8Z2tsLXquCpemnqJ0pRXFwo5MuBOy5GxcQLNrxn9buhQSLYlbJGstVdlxjxM43EWb_ynv15XnDOKwO2e7NHSWvPDioBTgUSFLbJUTx7sX57XGTBbO0mb6NStyYDzWtZ8miU6falkmK7FMNdpi3lOCNVj58wOX5nS1m-wQzHL2ttWpQJA2Oz5MvjqtjsES5xlSs9Vq4NFaC1QpaVA"
  },
  {
    title: "1984",
    author: "George Orwell",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1TyW1KeuA4Q5526eHJ6zS2s5IdBRfdQnbuzQw7nUVzApDdNn1zlL6D0FlUKHyaw8pxF2iAeqibx1dhiFdLe4wtxLRPDraunqH6ehPe1BqIAUNeq099NB3udB-syA530Bk1_zE-rI1K06z_GOJtLXhF0_Bn9ZtZXQm31OF31mdMta0NY2cp7_u-FeMI0EPuphW1daAtDs5WPxFIubdkp-89HDcRLSFtqw4lvkYDIP5RdFHfn4AUGOcN5sItSOJf3FAxnjnmIsDFik"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUGc_K-1LAV_IJBvi3D4WF3ne5ya6_nD8R5yY8zcM0WNHaAq0Oh5Jv1jd7b5ciJztjr_SfUyAHHWqAafky-eVm8OCg5NetGTccUjLaC6A5c4s6x-Z0hhqY6UvcNN3n6TzL8-eKieWIygA0jK-ormpYG-Y6q-6z8F4wWqRkErA8n56LUvnuRJhyZP5ynI66JfK-R6Gdv17TtCnonS0cGqqMERkR6W_Pz_21BcFk-a58yBYDWalS28YDW3GSdmM2nSBxfQhN_VHKRHc"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIpiIX8P1XxpSt8zJ9nQfdJy8sUMG8hIrOJiVFDFmHjz_TMgWB1Ge0oX3Gl5WRKJAH92heIw0wkUbVCr2xltR_g5p85I2785PcnQ3TORKv71LZoS5GIeJS3FXR4ASHvA1INdyiQ6w0X61Zf9b98JAJwI1k0-uuhJb5wR2XrMNQYETFuRW0ANBEckjkb5zlOMpwv6A2_b4sRhF7qVHxfFwZUeA87PpGuNmnJidCfFr9OoqIuZSDdfyRhNH4RdvOahIdHLkEUmcNq30"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0MhwlJ6Z2FjTEGoRgj1_I9_LOoVLgGuDBaeQDYRBMQi7-Jw1NgTX27g3GNvLFjP80X79l1WpiFY3mj5_MRGX3Zjpk0aoAdc6AfpiZdCQra3gdeTNbZ_1IGrdHs6nw32KF-8YdgdWyxHdk7qf7NdW2CfXtyVhNVRehGasfX_BTulxl7bk8eIZ_BoT3ViZhh-uJUYfmDgo2wt6eBItqnet_-YJSqWBTNpEk52HEbTlRTRNs50tloIMdDpzwsASpipnXwmmAKdk9WSQ"
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiom-52V2jABbW02aUGJi1qPFFwO4UYOsRKw5rXYA1nwq-Rz8bO6vBVUVUWRfTE9nL7Y88PpC7e93tEPxdUHTi_1bA2b3NlSyuLmk-wWeXKQe93S217bxZCvt-GLHdsKYyriVqfIGPhNm5BP8grOgax3E4VSy7IO2aKGfLBODW0uDmMDNm8ChzLVKlRGql7G7Z7KV7vboUkpOssgbcr8cKlRzk09VCBlXeksi_YjTlFCZ7-E_68g7JbX7HwT3j0WDWcx2hZRRMfVw"
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWprdLMJk_joBoYO91R7i0jrUrrIkraCVuTAhODdHAj4LBwyWu1z0o3r55rkPxCHIrfEnm_TgqraWV9h75XyMaBucXKfA6m5P1SHadQd_MsvpntysaCbcsvDfz0G2HyRAb5LjmGMSS8VywLckh5PuW9IVYLe7SiAVXFzQpyYWwArEsCvnVzeEYpBnr5SAKDxdtbAK4dZLNvy2TSYMZ1VEYQt1AXoeFzQZZWjrAAovN905jPu7myk58q0jRPoMDq6167a2IqscWVfI"
  },
  {
    title: "The Odyssey",
    author: "Homer",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3D_RYDzkdNUv-Wm_MSB_RaajMiYvrSKLZ5YVE-eznznQ9lkG2uwm5qz7bXtII5Kt1GEke8zRSLuOL3QgcH5z2QnnhllJQfvJ6AqqzviwfG7w6l5E8lBMwMrycbtE-LkNw2Pj0zEljDbuAqyvxBY02SLIBNmRoGryEGeYcHJCJiwXGcNpv97V8DYe4TSSAcUWZuosXaPlsW9O3T07sIRQL_OB3pHjGI42ini1wrBQLTkFoVuxcIdggGJv71OM-0oQ5RlCpOR3978Y"
  },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGZdFGF152mjKWBK15qKjMkxS76rK3Lv-a7paIe0ALVUpxtMVmh_GAT8VP1H6gtPWdf6jVKpgO-iUs9MmSfNlntyaeoNSrA-58PSOBUDLPwZZxsk56fmv1rOQ8pffhUWlc9Ph6l7I8QeJ-7Xzp4LwFPIeosNNi8WK9lcb0o0NkYkry8OJLO-R5gNPaZZfDx7il0U0eNLhgo_T98tg70YWaEpqk98UApcIzoZB025OUJhz4i7a65RM2ozany79zSsc8ptebK7c6io8"
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz-XyYuLaiZLfF0GCAUsK4uW_5lgT2H4eEkTqKTIOiHlxYW0Ri5EjsA__xjrgl1gCpd2XlUumxK-DvmVEc1hbhdRNZ3nbKvH7qmk6L4K1Th6iYF_L_5v0lvH5eRs5qFneZrlVKxEyAUlEChnzYdU2RKUWJaXN1QWIPrxoNIeB0OOzWWOl172ZJXwkc3LGivBEbEVXgUQ66s_qg7SiNuSiTEfDlvFd5Nzng68zSkIB58wvU8kSvHfwYmbIq1mz_KP-c_A-6FYa5RGM"
  }
];
