import styled from "@emotion/styled"

export const GeneralBtn = styled.button`
  font-family: ${props => props.theme.headingFont};
  font-size: 1rem;
  padding: 1rem 1.2rem;
  cursor: pointer;
`

export const MenuBtn = styled(GeneralBtn)`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 80px;

  z-index: 1;
`

// export const PaperBtn = styled(GeneralBtn)`
//   margin-right: 1rem;
//   background-color: ${props => props.theme.roadmapBg};
//   color: ${props => props.theme.textColorInv};
//   border: 2px solid transparent;
//   border-radius: 2px;

//   i {
//     display: inline-block;
//     margin-right: 1.2rem;
//   }

//   &:hover {
//     color: ${props => props.theme.roadmapBg};
//     background-color: transparent;
//     border-color: ${props => props.theme.roadmapBg};
//     transition: all 400ms ease;
//   }

//   ${mq("tiny", "min")} {
//     padding: 1rem 1.2rem;
//     font-size: ${props => props.theme.helperText};
//   }
//   ${mq("tablet", "min")} {
//     padding: 1.2rem 1.5rem;
//     font-size: ${props => props.theme.header5};
//   }
// `

// export const AboutBtn = styled(PaperBtn)`
//   background-color: transparent;
//   border: 2px solid ${props => props.theme.roadmapBg};
//   color: ${props => props.theme.roadmapBg};

//   &:hover {
//     color: ${props => props.theme.textColorInv};
//     background-color: ${props => props.theme.roadmapBg};
//     transition: all 400ms ease;
//   }
// `
