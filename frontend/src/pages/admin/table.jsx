// Chakra imports
import {Box, Flex, Table, TableContainer, Tbody, Text, Th, Thead, Tr, useColorModeValue} from "@chakra-ui/react";
// Custom components
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import TablesProjectRow from "../../components/Tables/TablesProjectRow";
import TablesTableRow from "../../components/Tables/TablesTableRow";
import {tablesProjectData, tablesTableData} from "../../variables/general";


function Tables() {
    const textColor = useColorModeValue("gray.700", "white");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const bg = useColorModeValue("white", "gray.800");


    return (
        <Box px={10} w={'100%'}>
            <Flex direction="column" pt={{base: "120px", md: "75px"}}>
                <Card overflowX={{sm: "scroll", xl: "hidden"}} pb="0px">
                    <CardHeader p="6px 0px 22px 0px">
                        <Text fontSize="xl" color={textColor} fontWeight="bold">
                            Authors Table
                        </Text>
                    </CardHeader>
                    <CardBody>
                        <TableContainer bg={bg} p={5}>
                            <Table variant="simple" color={textColor}>
                                <Thead>
                                    <Tr my=".8rem" pl="0px" color="gray.400">
                                        <Th pl="0px" borderColor={borderColor} color="gray.400">
                                            Author
                                        </Th>
                                        <Th borderColor={borderColor} color="gray.400">Function</Th>
                                        <Th borderColor={borderColor} color="gray.400">Status</Th>
                                        <Th borderColor={borderColor} color="gray.400">Employed</Th>
                                        <Th borderColor={borderColor}></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {tablesTableData.map((row, index, arr) => {
                                        return (
                                            <TablesTableRow
                                                name={row.name}
                                                logo={row.logo}
                                                email={row.email}
                                                subdomain={row.subdomain}
                                                domain={row.domain}
                                                status={row.status}
                                                date={row.date}
                                                isLast={index === arr.length - 1}
                                                key={index}
                                            />
                                        );
                                    })}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </CardBody>
                </Card>
                <Card
                    my="22px"
                    overflowX={{sm: "scroll", xl: "hidden"}}
                    pb="0px"
                >
                    <CardHeader p="6px 0px 22px 0px">
                        <Flex direction="column">
                            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
                                Projects Table
                            </Text>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <TableContainer bg={bg} p={5}>
                            <Table variant="simple" color={textColor}>
                                <Thead>
                                    <Tr my=".8rem" pl="0px">
                                        <Th pl="0px" color="gray.400" borderColor={borderColor}>
                                            Companies
                                        </Th>
                                        <Th color="gray.400" borderColor={borderColor}>Budget</Th>
                                        <Th color="gray.400" borderColor={borderColor}>Status</Th>
                                        <Th color="gray.400" borderColor={borderColor}>Completion</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {tablesProjectData.map((row, index, arr) => {
                                        return (
                                            <TablesProjectRow
                                                name={row.name}
                                                logo={row.logo}
                                                status={row.status}
                                                budget={row.budget}
                                                progression={row.progression}
                                                isLast={index === arr.length - 1}
                                                key={index}
                                            />
                                        );
                                    })}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </CardBody>
                </Card>
            </Flex>
        </Box>
    );
}

export default Tables;
