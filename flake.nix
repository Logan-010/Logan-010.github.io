{
  description = "Portfolio Flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs =
    { nixpkgs, fenix, ... }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];

      forAllSystems =
        f:
        nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system} fenix.packages.${system});
    in
    {
      devShells = forAllSystems (
        pkgs: fenixPkgs: {
          default = pkgs.mkShell {
            packages = with pkgs; [
              # JavaScript / TypeScript
              nodejs_26
              typescript
              typescript-language-server

              # Development tools
              pkg-config
              openssl
              git
              gnumake
            ];
          };
        }
      );
    };
}
